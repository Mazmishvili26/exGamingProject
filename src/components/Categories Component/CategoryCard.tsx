import { useNavigate } from 'react-router-dom';


function CategoryCard(props : {
    id: number;
    text: string;
    bg: string;
    logo: string;
    categoryValue : string,
    setCategoryValue: (categoryValue: string) => void;
}) 
{

    const { bg, text , logo , categoryValue , setCategoryValue} = props;

    const navigate = useNavigate();

    const handleCategoryClick = (text : string) => {
        navigate('games');
        setCategoryValue(text);
        window.scrollTo(0, 0);
    }

  return (
    <div className='categories-card' onClick={() => handleCategoryClick(text)}>

        <div className='categories-bg-box'>
            <img src={bg}  className="categories-bg"/>
        </div>

        <div className='categories-logo-box'>
            <img src={logo}  className="categories-logo"/>
        </div>

        <span className='categories-text'>{text}</span>

    </div>
  )
}

export default CategoryCard