// src/data/fakeUserData.js

export const fakeUserData = {
  id: '17841406157831111',
  username: 'sophia.travels',
  followers_count: 125432,
  biography:
    "Chasing sunsets and new adventures ✈️ | Content Creator | Let's connect and collaborate!",
  profile_picture_url: 'https://i.pravatar.cc/150?u=sophia',
  media_count: 255,
  media: {
    data: [
      {
        id: '18010533444444555',
        caption:
          'Luxury stay at The Grand Budapest Hotel! ✨ What an amazing experience. #hotel #travel #luxury',
        media_type: 'IMAGE',
        media_url:
          'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        permalink: 'https://www.instagram.com/p/Cxyz.../',
        timestamp: '2023-10-27T10:00:00+0000',
        insights: {
          data: [
            {name: 'likes', values: [{value: 12543}]},
            {name: 'comments', values: [{value: 345}]},
            {name: 'reach', values: [{value: 85210}]},
            {name: 'impressions', values: [{value: 95000}]},
            {name: 'saved', values: [{value: 1200}]},
          ],
        },
      },
      {
        id: '17918921888888888',
        caption:
          'A quick room tour of this beautiful place! The view is breathtaking.',
        media_type: 'VIDEO',
        media_url: 'https://url.to.video/...', // Video URLs are complex
        thumbnail_url:
          'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        permalink: 'https://www.instagram.com/p/Cabc.../',
        timestamp: '2023-10-26T12:30:00+0000',
        insights: {
          data: [
            {name: 'likes', values: [{value: 15032}]},
            {name: 'comments', values: [{value: 512}]},
            {name: 'video_views', values: [{value: 250000}]},
          ],
        },
      },
      {
        id: '17918921777777777',
        caption: 'My favorite moments from the trip! 1, 2, or 3? 📸',
        media_type: 'CAROUSEL_ALBUM',
        permalink: 'https://www.instagram.com/p/Cdef.../',
        timestamp: '2023-10-25T15:00:00+0000',
        children: {
          data: [
            {
              media_url:
                'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg',
              id: '1',
            },
            {
              media_url:
                'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
              id: '2',
            },
          ],
        },
        insights: {
          data: [
            {name: 'likes', values: [{value: 9870}]},
            {name: 'comments', values: [{value: 210}]},
          ],
        },
      },
    ],
  },
};
