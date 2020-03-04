import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Fade } from 'react-reveal'
import ReactPaginate from 'react-paginate'

import './CharactersList.css'
import Character from './Character/Character'
import Loading from '../UI/Loading/Loading'
import * as actions from '../../store/actions/index'
import Modal from '../UI/Modal/Modal'

class CharactersList extends Component {
    state = {
        showModal: false
    }

    componentDidMount() {
        if (!this.props.loading && !this.props.characters.length)
            this.props.onLoadCharacters()
    }

    handlePageChange = page => {
        if (this.props.currentPage !== page) {
            const nextPage = page + 1
            this.props.onLoadCharacters(nextPage)
        }
    }

    handleCharacterClick = id => {
        this.props.onSelectCharacter(id)
        this.setState({ showModal: true })
    }

    handleModalClose = () => {
        this.setState({ showModal: false })
    }

    render() {
        return (
            <div className="List">
                <h2>Characters</h2>

                <Modal 
                    show={this.state.showModal}
                    character={this.props.selectedCharacter}
                    loading={this.props.modalLoading}
                    close={this.handleModalClose} />

                {this.props.loading ? <Loading /> : (
                    <Fade>
                        <div className="cards">
                            {this.props.characters.map(character => (
                                <Character
                                    key={character.id} 
                                    name={character.name}
                                    image={character.image}
                                    clicked={() => this.handleCharacterClick(character.id)} />
                            ))}
                        </div>

                        <div className="pagination">
                            <ReactPaginate
                                initialPage={this.props.currentPage}
                                pageCount={this.props.pages}
                                onPageChange={(data) => this.handlePageChange(data.selected)}
                                pageRangeDisplayed={2}
                                marginPagesDisplayed={2}
                                activeClassName="pageActive"
                                previousLabel="&laquo;"
                                nextLabel="&raquo;" />
                        </div>
                    </Fade>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        characters: state.character.characters,
        selectedCharacter: state.character.selectedCharacter,
        loading: state.character.loading,
        modalLoading: state.character.modalLoading,
        pages: state.character.totalPages,
        currentPage: state.character.currentPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadCharacters: page => dispatch(actions.getCharacters(page)),
        onSelectCharacter: id => dispatch(actions.getCharacter(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList)
