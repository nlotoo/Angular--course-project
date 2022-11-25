const User = require('../schemes/USER.js');
const Item = require('../schemes/ITEM.js')
const Comment = require('../schemes/COMMENT.js')
const newItem = require('../schemes/ITEM.js')
const bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
const { SALT_ROUNDS, JWT_SECRET } = require('../config/config.js');


async function createUser(data) {

    let { email, password } = data;

    let user = await User.findOne({ email: email })
    if (user) {
        throw "User Exist"
    }

    const hash = bcrypt.hashSync(password.trim(), SALT_ROUNDS);

    let pattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;

    if (!pattern.test(email)) {
        throw 'This email is incorect';
    }

    if (password.length < 2) {
        throw 'Incorect password';
    }

    const userObj = new User({
        email: email.trim(),
        password: hash,
    });

    userObj.save();


    if (userObj) {
        let inscriptionData = inscription(userObj);
        return inscriptionData;
    } else {
        throw 'Something is wrong'
    }
}
async function loginUser(data) {

    let { email, password } = data;
    let user = await User.findOne({ email });

    // console.log(user)


    if (!user) {
        throw 'Incorect User';
    }
    itTrue = bcrypt.compareSync(data.password, user.password)

    if (!itTrue) {
        throw 'Incorect email or password'
    }

    // let token = jwt.sign({ 'email': email, 'id': user._id, }, JWT_SECRET);


    let inscriptionData = inscription(user, email)
    return inscriptionData
    // return { token, userId: user._id, email: user.email };
}

function inscription(user) {


    let token = jwt.sign({ 'email': user.email, 'id': user._id, }, JWT_SECRET);


    let reduceUserInfo = {
        token: token,
        email: user.email,
        userId: user._id,
    }

    return { reduceUserInfo }
}
async function addNewItem(data) {
    let { itemName, weight, imageUrl, description, author, price, likedAuthor } = data; // proverka

    // console.log(data);

    if (itemName.length < 1) {
        throw 'All fields are required'
    }

    if (!Number(weight)) {
        throw 'Your weight format is wrong.'
    }

    if (imageUrl.length < 1) {
        throw 'All fields are required'
    }
    if (description.length < 1) {
        throw 'All fields are required'
    }
    if (author.length < 1) {
        throw 'All fields are required'
    }

    const newItemObj = new newItem(data);
    return newItemObj.save();

}
async function getAll() {


    let data = await Item.find({})

    return data
}
async function getOneById(id) {

    let data = await Item.findById(id)
    return data
}
async function delteItemById(id) {

    let data = await Item.deleteOne({ _id: id })
    console.log(data)
    return data
}
async function updateOneItem(id, updateItem) {

    let data = await Item.findOneAndUpdate({ _id: id }, updateItem)

    if (!data) {
        throw 'DATA IS UNDIFINED'
    }

    return data
}
async function createComment(data, userId, itemId, email) {

    let date = new Date()
    let finalObj = {
        content: data,
        email: email,
        author: userId,
        time: date,
        likeButton: false,
    }


    if (finalObj.email == null) {
        finalObj.email = 'Anonimus'
    }



    let newComent = new Comment(finalObj)

    addComment(itemId, newComent._id)

    return newComent.save()



}
async function addComment(itemID, commentID) {

    let [post] = await Promise.all([
        Item.findOne({ _id: itemID })
    ])

    post.comm.push(commentID)

    return Promise.all([
        Item.updateOne({ _id: itemID }, post)
    ])
}
async function getAllComment() {
    let data = await Comment.find({})
    return data
}
async function loadItemComment(itemId) {
    let result = await Item.findOne({ _id: itemId }).populate('comm')
    return result.comm
}
async function loadCommentData(itemId) {

    let result = await Comment.findOne({ _id: itemId })
    return result
}
async function editComment(objData) {

    let result = await Comment.updateOne({ _id: objData.id }, { content: objData.data })

    return result


}
async function deleteComment(commentID) {
    console.log(commentID)
    let data = await Comment.deleteOne({ _id: commentID })
    return data
}
async function liked(objData) {

    // console.log(objData)

    let data = await Comment.findById({ _id: objData.commentID })
    data.likes.likes.find((userID) => {
        if (userID == objData.userID) {
            throw 'You can`t like two times one comment'
        }
    })

    data.likes.likes.push(objData.userID)
    let result = await Promise.all([
        Comment.updateOne({ _id: objData.commentID }, data)
    ])
    return result

}
async function dislike(objData) {

    let data = await Comment.findOne({ _id: objData.commentID })

    data.likes.likes = data.likes.likes.filter((a) => {
        return a != objData.userID
    });


    await data.updateOne({ _id: objData.commentID });
    data.save()

    arrayLikes = data.likes.likes

    return data
}

async function dislikeItem(objData) {
    let { itemID, logedUserID } = objData;

    let data = await User.findOne({ _id: logedUserID });
    let itemData = await Item.findOne({ _id: itemID });

    //in item
    itemData.likedAuthor = itemData.likedAuthor.filter((a) => {
        return a != logedUserID
    })

    await Item.updateOne({ _id: itemID }, itemData);
    itemData.save();

    //in User
    data.likedItems = data.likedItems.filter((a) => {
        return a != itemID
    })

    await User.updateOne({ _id: logedUserID }, data)
    data.save();



    return data;

}


async function likedItem(objData) {
    let { itemID, logedUserID } = objData;
    let data = await User.findById({ _id: logedUserID });

    //  in User.
    data.likedItems.find((likedItemsID) => {
        if (likedItemsID == itemID) {
            throw 'You can`t like two times one product'
        }
    })

    data.likedItems.push(itemID)

    let result = await Promise.all([
        User.updateOne({ _id: logedUserID }, data)
    ])


    // in Item
    let itemData = await Item.findOne({ _id: itemID });

    itemData.likedAuthor.find((a) => {
        if (a == logedUserID) {
            throw 'This author is liked this product'
        }
    })
    itemData.likedAuthor.push(logedUserID);

    await Item.updateOne({ _id: itemID }, itemData);
    itemData.save();
    return result
}


async function getFavorite(objData) {

    let { userId } = objData;
    result = await User.findOne({ _id: userId }).populate('likedItems')

  
    return result.likedItems
}





module.exports = {

    createUser,
    loginUser,
    addNewItem,
    getAll,
    getOneById,
    updateOneItem,
    delteItemById,
    createComment,
    getAllComment,
    loadItemComment,
    loadCommentData,
    editComment,
    deleteComment,
    liked,
    dislike,
    likedItem,
    dislikeItem,
    getFavorite,

};