import './Footer.css'

const Footer = () => {
  return (
    <div className="containerFooter">
      <p><strong>2022</strong> SOHO internet + humana</p>
      <div className='actions'>
        <p className='text'>Visitanos</p>
        <p className='text'>Escríbenos</p>
        <p className='text'>Llámanos</p>
      </div>

      <div className='network'>
        <p style={{color:'blue'}} className='text'>Facebook</p>
        <p style={{color:'cyan'}} className='text'>Twitter</p>
        <p style={{color:'steelblue'}} className='text'>LinkedIn</p>
        <p style={{color:'indianred'}} className='text'>Youtube</p>
      </div>
    </div>
  );
};

export default Footer;
