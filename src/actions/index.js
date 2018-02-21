import auth from './secrets';

export const RESIVED_MEMES = 'RESIVED_MEMES';
export const ERROR_GET_MEMES = 'ERROR_GET_MEMES';
export const NEW_MEME = 'NEW_MEME';

// Action creator
function resivedMeme(json) {
  const { memes } = json.data;
  return {
    memes,
    type: RESIVED_MEMES
  }
}
function errorGetMeme() {
  return {
    type: ERROR_GET_MEMES
  }
}
function fetchMemesJson() {
  return fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json());
}
export function fetchMemes() {
  return function (dispatch) {
    return fetchMemesJson().then((json) => {
      dispatch(resivedMeme(json));
    }).catch(() => {
      dispatch(errorGetMeme());
      console.log("Error With Getting Memes");
    });
  }
}
// export const fetchMemes2 = () => dispatch =>
//   fetch('https://api.imgflip.com/get_memes')
//   .then(res => res.json())
//   .then(json => dispatch(resivedMeme(json)));

const newMeme = meme => ({ type: NEW_MEME, meme });

// export const newMeme = meme => dispatch => 
// //   fetch( 'someUrl', {  } )
// //   .then(res => res.json())
// //   .then( memeJson => ({ type: NEW_MEME, meme: memeJson }));

const postMemeJson = params => {
  params['username'] = auth.username;
  params['password'] = auth.password;

  let bodyUrl = Object.keys(params).map( key => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
  }).join('&');

  return fetch('https://api.imgflip.com/caption_image', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: bodyUrl
   }).then( res => res.json() );

};


// export function createMeme(newMemeObject) {
//   return function (dispatch) {
//     return postMemeJson(newMemeObject)
//       .then( createdMeme => dispatch(newMeme( createdMeme.data )) );
//   }
// }

export const createMeme = newMemeObject => dispatch => 
        postMemeJson(newMemeObject).then( createdMeme => dispatch(newMeme(createdMeme.data)) );