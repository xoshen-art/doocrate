import React from 'react';
import PropTypes from 'prop-types';
import Button from 'src/views/components/button';
import Img from 'react-image';
import Icon from 'src/views/components/icon';
import AboutCarosel from 'src/views/components/about-carousel';

import './about-page.css';

const AboutPage = ({}) => {
  return (
    <div className="g-row sign-in">
      <div className="g-col">
        <h1>מה זה?</h1>
        <span>
          מערכת הדואוקרט הגיע מרעיון של בחור בשם ברוקס מבורדרלנד, אירוע הברנינג מן של דנמרק.
          הוא חיפש מודל שיאפשר לאנשים לעבוד ביחד כקהילה ולחלוק אחראיות בצורה נוחה
          <br/>
          המערכת פותחה במקור לאירוע מידברנרות, אירוע ברן מאורגן עצמאית
        </span>
        <br /><br />
        
        <br /><br />
        <h1>אני לא מצליח לעשות משהו. תמיכה טכנית?</h1>
        <span>כמובן. שלח מייל ל xoshen.art@gmail.com</span>
        <br /><br />
        <h1>זה מדהים. אני רוצה מערכת כזאת אצלי</h1>
        <span>מוזמנים לפנות ל - nimast@gmail.com </span> 
        <span>וגם ל - galbra@gmail.com</span>        
        <br /><br />
        <h1>מי אתם אנשים מופלאים שמשקיעים את הזמן שלהם בזה?</h1>
        <span>המערכת פותחה במקור על ידי אנשים שהם חלק מקולקטיב בשם מטהברן ששם לו למטרה לייצר כלים פשוטים לניהול קהילות יצירה משותפת
          <br/>
          פיתחנו את <a href='http://dreams.midburnerot.com/'>מערכת החלומות</a> עבור מידברנרות ועבור ברנים אחרים
          <br/>
          פרצופים של האנשים שגרמו לזה לקרות:
          <AboutCarosel />
        </span>
        <Button className='button-small'><a href='/'>חזור למערכת</a></Button>
      </div>
    </div>
  );
};

AboutPage.propTypes = {
};

export default AboutPage;