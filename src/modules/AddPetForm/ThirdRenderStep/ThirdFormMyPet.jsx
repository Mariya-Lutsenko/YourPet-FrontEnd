import React, { useState, useContext } from 'react';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';
import { validationSchemaThirdMy } from '../../../shared/services/FormValidation/addPetValidation';

import TitleModal from 'shared/components/TitleModal/TitleModal';
import StatusIndicator from 'shared/components/StatusIndicator/StatusIndicator';
import { ReactComponent as Plus } from '../../../icons/Plus.svg';
import css from './thirdStep.module.css';

import ButtonRoutes from 'shared/components/ButtonRoutes/ButtonRoutes';
import ButtonNext from 'shared/components/ButtonRoutes/ButtonNext';
import ButtonPrev from 'shared/components/ButtonRoutes/ButtonPrev';

export const ThirdFormMyPet = ({
  handleNextData,
  handlePrevStep,
  formData,
  currentStatus,
  chooseOption,
}) => {
  const [imageURL, setImageURL] = useState('');
  const [comments, setComments] = useState('');
  const [errors, setErrors] = useState({});

  const { theme } = useContext(ThemeContext);

  // const handleDone = () => {
  //   handleNextData({ imageURL, comments });
  // };

  const handleDone = () => {
    validationSchemaThirdMy
      .validate({ imageURL, comments }, { abortEarly: false })
      .then(() => {
        handleNextData({ imageURL, comments });
      })
      .catch(err => {
        const validationErrors = {};
        if (err.inner) {
          err.inner.forEach(error => {
            validationErrors[error.path] = error.message;
          });
        }

        setErrors(validationErrors);
      });
  };
  const handleFileChange = e => {
    setImageURL(e.target.files[0]);
  };
  return (
    <div
      className={`${css.myСomponent} ${
        theme === 'light' ? css.light : css.dark
      }`}
    >
      <TitleModal titleForm={'Add my pet'} />

      <StatusIndicator
        currentStatus={currentStatus}
        chooseOption={chooseOption}
      />
      <div className={css.photoContainer}>
        <label className={css.labelAddPhoto}>Add photo</label>
        <div>
          <input
            type="file"
            id="photo"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>
        <label htmlFor="photo">
          <div className={css.labelPhoto}>
            {imageURL && (
              <img
                className={css.previewPhoto}
                src={URL.createObjectURL(imageURL)}
                alt="Pet"
              />
            )}
            <Plus className={css.plusIcon} />
          </div>
        </label>
        {errors.imageURL && (
          <p className={css.ErrorTextLow}>{errors.imageURL}</p>
        )}
      </div>
      <div className={css.commentsContainerMyPet}>
        <label className={css.labelComments} htmlFor="comments">
          Comments
        </label>
        <textarea
          className={css.inputComments}
          id="comments"
          value={comments}
          placeholder="Type comment"
          onChange={e => setComments(e.target.value)}
        />
        {errors.comments && (
          <p className={css.errorComent}>{errors.comments}</p>
        )}
      </div>
      <ButtonRoutes>
        <ButtonNext textButton={'Done'} handleNextData={handleDone} />
        <ButtonPrev textButton={'Back'} handlePrevStep={handlePrevStep} />
      </ButtonRoutes>
    </div>
  );
};
