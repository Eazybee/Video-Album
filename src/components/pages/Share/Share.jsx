import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { YOUTUBE_API_KEY } from '../../../constants';
import youtubeApi from '<api>/index';
import PageLayout from '../../ui/layout/PageLayout';
import Form from '<organisms>/Form/Form';
import getFlexbox from '<atoms>/Flexbox/Flexbox';
import Text from '<atoms>/Text/Text';
import VideoContext from '<context>/video';
import UserContext from '<context>/user';


const Flexbox = getFlexbox();
const Fieldset = getFlexbox('fieldset');

/**
 * @description - SharePage Component
 *
 * @prop {object} children - children
 *
 * @return {component} SharePage
 */
const SharePage = ({ history }) => {
  const [, setVideos] = useContext(VideoContext);
  const [user] = useContext(UserContext);
  const [error, setError] = useState('');

  const onSubmit = async ({ url }) => {
    const query = url.split('https://www.youtube.com/watch?v=')[1]
    || url.split('https://youtu.be/')[1]
    || url.split('https://www.youtube.com/embed/')[1];

    if (!query) {
      return setError('Invalid youtube url');
    }

    try {
      const id = query.split('&')[0];
      const { data: { items } } = await youtubeApi.get(
        '/videos',
        {
          params: {
            key: YOUTUBE_API_KEY,
            part: 'snippet,statistics',
            id,
          },
        },
      );

      if (!items[0]) {
        return setError('Invalid youtube url');
      }

      const data = {
        src: id,
        title: items[0].snippet.localized.title,
        description: items[0].snippet.localized.description,
        likeCount: items[0].statistics.likeCount,
        dislikeCount: items[0].statistics.dislikeCount,
        sharer: user,
      };

      setVideos(props => [
        data,
        ...props,
      ]);
      return history.push('/');
    } catch (err) {
      return setError('Please check your internet connection');
    }
  };

  return (
    <PageLayout>
      <Flexbox height='share' justifyContent='center' alignItems='center' >
        <Fieldset padding='nm' leftPadding='xnm' mediaQuery={SharePage.mediaQuery}>
          <legend>Share a Youtube video</legend>
          { error
            && <Text color='danger' fontSize='small' fontWeight='bold' display='block' padding='xxsm'>
                {error}
            </Text>
          }
            <Form
              inputs={[
                {
                  label: 'Youtube URL',
                  inputProps: {
                    placeholder: 'https://www.youtube.com/watch?v=',
                    name: 'url',
                    required: true,
                  },
                  id: 9,
                  showError: true,
                },
              ]}
              rules = {{ url: 'required|url' }}
              buttonText='Share'
              submit ={onSubmit}
              flexDirection= 'column'
              width='share'
          />
        </Fieldset>
      </Flexbox >
    </PageLayout>
  );
};

SharePage.mediaQuery = `
@media screen and (max-width:510px){
  padding-left: .5em;
}

@media screen and (max-width:462px){
  padding-left: .2em;

  form {
    width: 25em;
    display: flex;
    padding-bottom: 1em;
  }
}

 @media screen and (max-width:380px){
  padding: .1em;
  form {
    width: 20em;
  }
}
`;
SharePage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default SharePage;
