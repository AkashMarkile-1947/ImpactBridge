import PropTypes from 'prop-types';
import './tailwind.css'

function AuthTemp({ component: Component, ...props }) {
  return (
    <div
        className="flex items-center justify-center h-screen bg-white text-black"
        style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh' // adjust as needed
      }}
      >
        <div className="flex flex-col items-center justify-center w-full max-w-screen-lg px-8">
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
            <div className="w-full md:w-[45%] w-[90%] m-auto min-w-[350px]">
              <div className="w-full overflow-hidden" style={{maxWidth: '450px', margin: '0 auto'}}>
                <Component {...props} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
/* return (
  <div
      className="flex items-center justify-center h-screen bg-white text-black"
      style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh' // adjust as needed
    }}
    >
      <div className="flex flex-col items-center justify-center w-full max-w-screen-lg px-8">
        <div className="w-full md:flex md:flex-row md:items-center md:justify-between">
          <div className="hidden md:inline md:w-[45%] w-full mb-10 md:mb-0">
            <h1>Lorem ipsum dolor sit.</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident tenetur perspiciatis expedita magnam maiores recusandae
              odio minima saepe impedit ut?
            </p>
          </div>
          <div className="w-full md:w-[45%] w-[90%] m-auto min-w-[350px]">
            <div className="w-full overflow-hidden">
              <Component {...props} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
) */

AuthTemp.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default AuthTemp;
