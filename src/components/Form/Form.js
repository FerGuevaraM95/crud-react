import React, { Component } from 'react';

class Form extends Component {

    // Crear los refs
    titleRef = React.createRef();
    textRef = React.createRef();


    createPost = (e) => {
        e.preventDefault();
        // Leer los refs
        const post = {
            title: this.titleRef.current.value,
            body: this.textRef.current.value,
            userId: 1
        }

        // console.log(post);
        
        // Enviar por props o petición de axios
        this.props.createPost(post);
    }

    render() { 
        return (
            <form onSubmit={this.createPost} className="col-8">
                <legend className="text-center mt-5">Crear Nuevo Post</legend>
                <div className="form-group">
                    <label>Título del Post:</label>
                    <input type="text" ref={this.titleRef} className="form-control" placeholder="Título del Post" />
                </div>
                <div className="form-group">
                    <label>Contenido:</label>
                    <textarea ref={this.textRef} className="form-control" placeholder="Contenido..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary ">Crear</button>
            </form>
        );
    }
}
 
export default Form;