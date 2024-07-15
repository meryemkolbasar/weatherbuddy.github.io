import React from 'react';
import styles from './DescriptionCard.module.scss'; // DescriptionCard için stil dosyası

const DescriptionCard = () => {
  return (
    <div className={`${styles['description-card']} ${styles['circle']}`}>
      <div className={styles['background']}></div>
      <div className={styles['content']}>
        <h1 className={styles['home-title']}>Aktuelle Wetterdaten und gesunde Lebensrat von Koala Buddy!</h1>
        <p className={styles['home-text']}>
          Koala Buddy begleitet dich mit aktuellen Wetterinformationen und gesunden Lebensratschlägen. Denk dran, er kann jederzeit schlafen gehen, also genieße die Zeit mit ihm! 😊🐨
        </p>
      </div>
    </div>
  );
};

export default DescriptionCard;
