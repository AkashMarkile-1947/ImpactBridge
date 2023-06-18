import PropTypes from 'prop-types';
import Nav from './Navbar';
import './tailwind.css'

function AuthTemp({ component: Component, ...props }) {
  return (
      <div style={{ background: "#d2cfcf"}}>
        <Nav color="trans" />
        <div
        className="flex items-center justify-center h-screen text-black auth-temp"
        style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 68px)',
        maxHeight: '100%', // adjust as needed
      }}
      >
        <div className="flex flex-col items-center justify-center w-full max-w-screen-lg px-8 bg-[]">
          <div className="w-full md:flex md:flex-row md:items-center md:justify-between">
            <div className="md:inline md:w-[45%] w-full mb-10 md:mb-0">
              <div style={{maxWidth: '450px', margin: '0 auto'}} >
              <h1 className='text-2xl mb-2'>Lorem ipsum dolor sit.</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident tenetur perspiciatis expedita magnam maiores recusandae
                odio minima saepe impedit ut?
              </p>
              </div>
            </div>
            <div className="auth-component">
              <div className="w-full overflow-hidden" style={{maxWidth: '450px', margin: '0 auto'}}>
                <Component {...props} />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}

AuthTemp.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default AuthTemp;
