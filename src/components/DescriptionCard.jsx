import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DescriptionCard.module.scss';

const DescriptionCard = () => {
  return (
    <div className={styles['page-container']}> {/* Ana konteyneri ekliyoruz */}
      <div className={`${styles['description-card']} ${styles['circle']}`}>
        <div className={styles['background']}></div>
        <div className={styles['content']}>
          <h1 className={styles['home-title']}>Aktuelle Wetterdaten und gesunde Lebensrat von Koala Buddy!</h1>
          <p className={styles['home-text']}>
            Koala Buddy begleitet dich mit aktuellen Wetterinformationen und gesunden Lebensratschlägen.
          </p>
          <Link to="/koala" className={styles['button']}>Koala'ya Git</Link>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
