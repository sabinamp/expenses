import PropTypes from 'prop-types';
import './Content.css';
const Content = (props) => {
    const { children } = props;
    return (
      <main className="content">
        <>
          {children}
        </>
      </main>
    );
  }
  
  Content.propTypes = {
    children: PropTypes.element.isRequired
  };
 export default Content;