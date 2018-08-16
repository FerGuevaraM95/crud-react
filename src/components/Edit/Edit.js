import React, { Component } from 'react';

class Edit extends Component {

    // Crear los refs
    titleRef = React.createRef();
    textRef = React.createRef();


    editPost = (e) => {
        e.preventDefault();
        // Leer los refs
        const post = {
            title: this.titleRef.current.value,
            body: this.textRef.current.value,
            userId: 1,
            id: this.props.post.id
        }

        // console.log(post);

        // Enviar por props o petición de axios
        this.props.editPost(post);
    }

    loadForm = () => {

        if(!this.props.post) return null;

        const { title, body } = this.props.post;

        return (
            <form onSubmit={this.editPost} className="col-8">
                <legend className="text-center mt-5">Editar Post</legend>
                <div className="form-group">
                    <label>Título del Post:</label>
                    <input type="text" ref={this.titleRef} className="form-control" defaultValue={title} />
                </div>
                <div className="form-group">
                    <label>Contenido:</label>
                    <textarea ref={this.textRef} className="form-control" defaultValue={body}></textarea>
                </div>
                <button type="submit" className="btn btn-primary ">Guardar Cambios</button>
            </form>
        )
    }

    render() {

        return (
            <React.Fragment>
                { this.loadForm() }
            </React.Fragment>
        );
    }
}

export default Edit;