import './Avatar.css';

const Avatar = (props) => {
   const [nome,sobrenome] =props.nome.split((''));

   
     return <div className='avatar'>
        {props.nome}
     </div>
};

export default Avatar;