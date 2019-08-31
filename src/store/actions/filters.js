import axios from 'axios'

const apiUrl = 'http://localhost:3000'

export const getFilters = () => {
    return dispatch => {
        return axios.get(`${apiUrl}/filters`)
            .then(response => {
                dispatch(getFiltersSuccess(response.data))
            })
            .catch(error => {
                throw (error)
            })
    }
}

export const getFiltersSuccess = filters => ({
    type: 'GET_FILTERS',
    filters
})


export const setVisibilityFilter = filter => {
    return dispatch => {
        dispatch(setLoading(true))
        return axios.put(`${apiUrl}/selectedFilter`, { name: filter })
            .then(response => {
                dispatch(setVisibilityFilterSuccess(response.data.name))
            })
            .catch(error => {
                throw (error)
            })
            .finally(() => {
                dispatch(setLoading(false))
            })
    }
}

export const setVisibilityFilterSuccess = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const getVisibilityFilter = () => {
    return dispatch => {
        return axios.get(`${apiUrl}/selectedFilter`)
            .then(response => {
                dispatch(setVisibilityFilterSuccess(response.data.name))
            })
            .catch(error => {
                throw (error)
            })
    }
}

export const getVisibilityFilterSuccess = filter => ({
    type: 'GET_VISIBILITY_FILTER',
    filter
})

export const setLoading = isLoading => ({
    type: 'SET_LOADING',
    isLoading
})