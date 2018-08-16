import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert2';

class Post extends Component {

    deleteConfirm = () => {

        const { id } = this.props.info;

        swal({
            title: '¿Estas seguro?',
            text: "¡Esta acción no se puede deshacer!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Si, Borrar!',
            cancelButtonText :'Cancelar'
        }).then((result) => {
            if (result.value) {
                this.props.deletePost(id)
                swal(
                    '¡Eliminado!',
                    '¡El post ha sido eliminado!',
                    'success'
                )
            }
        })

    }

    render() { 

        const { id, title } = this.props.info;

        return (
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>
                    <Link to={`/post/${id}`} className="btn btn-primary m-1">Ver</Link>
                    <Link to={`/edit/${id}`} className="btn btn-warning m-1">Editar</Link>
                    <button onClick={this.deleteConfirm } type="button" className="btn btn-danger m-1">Borrar</button>
                </td>
            </tr>
        );
    }
}
 
export default Post;