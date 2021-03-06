import axios from "axios"
import {
    FIND_POST_BY_ID,
    IS_POST_ALREADY_EXIST_BY_USER,
    FIND_RELATED_POSTS,
    FIND_TOP_NATIVE_FROM_TO
} from '../../constants/post-rest-client'
import {
    FETCH_SINGLE_POST_FULFILLED,
    FETCH_SINGLE_POST_REJECTED,
    FETCH_RELATED_POSTS_FULFILLED,
    FETCH_RELATED_POSTS_REJECTED,
    FETCH_TOP_NATIVE_FULFILLED, FETCH_TOP_NATIVE_REJECTED
} from '../../constants/post/posts-constants';
import {GET_IS_POST_EXIST_FULFILLED, GET_IS_POST_EXIST_REJECTED} from "../../constants/user/user-constants"

export const fetchPostPictures = (postId) => dispatch => {
    return axios.get(FIND_POST_BY_ID + postId)
        .then((res) => {
            dispatch({type: FETCH_SINGLE_POST_FULFILLED, payload: res.data})
        })
        .catch((err) => {
            dispatch({type: FETCH_SINGLE_POST_REJECTED, payload: err})
        })
};


export const isPostAlreadySavedByUser = (postId, userId) => dispatch => {
    return axios.get(IS_POST_ALREADY_EXIST_BY_USER + "/" + userId + "/" + postId)
        .then((res) => {
            dispatch({type: GET_IS_POST_EXIST_FULFILLED, payload: res.data});
        })
        .catch((err) => {
            dispatch({type: GET_IS_POST_EXIST_REJECTED, payload: err})
        })
};


export const getRelatedPosts = (query, excludeId) => dispatch => {
    return axios.get(FIND_RELATED_POSTS + "?query=" + query + "&excludeId=" + excludeId)
        .then((res) => {
            dispatch({type: FETCH_RELATED_POSTS_FULFILLED, payload: res.data});
        })
        .catch((err) => {
            dispatch({type: FETCH_RELATED_POSTS_REJECTED, payload: err})
        })
};
