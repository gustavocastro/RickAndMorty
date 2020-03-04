import * as actionTypes from '../actions/actionTypes'

const initialState = {
    characters: [],
    selectedCharacter: {},
    loading: false,
    modalLoading: false,
    currentPage: 0,
    totalPages: 0,
    error: null
}

const getCharactersStart = (state) => {
    return { ...state, loading: true }
}

const getCharactersSuccess = (state, action) => {
    return { 
        ...state,
        characters: action.characters,
        loading: false, 
        currentPage: action.currentPage,
        totalPages: action.totalPages 
    }
}

const getCharactersFail = (state, action) => {
    return { 
        ...state,
        loading: false, 
        characters: [], 
        error: action.error 
    }
}

const getSelectedCharacterStart = (state, action) => {
    return { ...state, modalLoading: true }
}

const getSelectedCharacterSuccess = (state, action) => {
    return { 
        ...state,
        selectedCharacter: action.character,
        modalLoading: false
    }
}

const getSelectedCharacterFail = (state, action) => {
    return { 
        ...state,
        selectedCharacter: {}, 
        modalLoading: false,
        error: action.error 
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CHARACTERS_START:
            return getCharactersStart(state)
        case actionTypes.GET_CHARACTERS_SUCCESS:
            return getCharactersSuccess(state, action)
        case actionTypes.GET_CHARACTERS_FAIL:
            return getCharactersFail(state, action)
        case actionTypes.GET_SELECTED_CHARACTER_START:
            return getSelectedCharacterStart(state)
        case actionTypes.GET_SELECTED_CHARACTER_SUCCESS:
            return getSelectedCharacterSuccess(state, action)
        case actionTypes.GET_SELECTED_CHARACTER_FAIL:
            return getSelectedCharacterFail(state, action)
        default:
            return state
    }
}

export default reducer