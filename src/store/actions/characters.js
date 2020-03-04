import axios from '../../axios'
import * as actionTypes from './actionTypes'

const getCharactersStart = () => {
    return {
        type: actionTypes.GET_CHARACTERS_START
    }
}

const getCharactersSuccess = (characters, pageInfo) => {
    const { totalPages } = pageInfo
    const nextPage = +pageInfo.nextPage.split('?page=')[1] || null
    let currentPage = 0

    if (nextPage > 2)
        currentPage = nextPage - 2
    if (!nextPage)
        currentPage = totalPages - 1
    
    return {
        type: actionTypes.GET_CHARACTERS_SUCCESS,
        characters,
        currentPage,
        totalPages
    }
}

const getCharactersFail = (error) => {
    return {
        type: actionTypes.GET_CHARACTERS_FAIL,
        error
    }
}

const getSelectedCharacterStart = () => {
    return {
        type: actionTypes.GET_SELECTED_CHARACTER_START
    }
}

const getSelectedCharacterSuccess = character => {
    return {
        type: actionTypes.GET_SELECTED_CHARACTER_SUCCESS,
        character
    }
}

const getSelectedCharacterFail = (error) => {
    return {
        type: actionTypes.GET_SELECTED_CHARACTER_FAIL,
        error
    }
}

export const getCharacters = (page = 0) => {
    return dispatch => {
        dispatch(getCharactersStart())
        
        return axios.get('/character/?page=' + page)
             .then(res => {
                const characters = res.data.results
                const pagesInfo = {
                    totalPages: res.data.info.pages,
                    nextPage: res.data.info.next
                }

                dispatch(getCharactersSuccess(characters, pagesInfo))
             })
             .catch(err => {
                 Promise.reject(err)
                 console.error(err)
                 dispatch(getCharactersFail(err))
             })
    }
}

export const getCharacter = id => {
    return dispatch => {  
        dispatch(getSelectedCharacterStart())

        return axios.get('/character/' + id)
             .then(res => {
                const character = res.data

                dispatch(getSelectedCharacterSuccess(character))
             })
             .catch(err => {
                 Promise.reject(err)
                 console.error(err)
                 dispatch(getSelectedCharacterFail(err))
             })
    }
}