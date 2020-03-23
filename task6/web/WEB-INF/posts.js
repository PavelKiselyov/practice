var posts = (function () {
    let posts = [
        {
            id: '1',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:13:00'),
            author: 'Иван Иванов',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [
                '#JavaScript'
            ],
            likes: [
                'Андрей Андреев'
            ]
        },
        {
            id: '2',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:14:00'),
            author: 'Иван Иванов',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [
                '#JavaScript'
            ],
            likes: [
                'Андрей Андреев'
            ]
        },
        {
            id: '3',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:15:00'),
            author: 'Иван Иванов',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [
                '#JavaScript'
            ],
            likes: [
                'Андрей Андреев'
            ]
        },
        {
            id: '4',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:16:00'),
            author: 'Иван Иванов',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [],
            likes: [
                'Андрей Андреев'
            ]
        },
        {
            id: '5',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:17:00'),
            author: 'Иван Иванов',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [],
            likes: [
                'Андрей Андреев'
            ]
        },
        {
            id: '6',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:18:00'),
            author: 'Иван Иванов',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [
                '#JavaScript'
            ],
            likes: [
                'Андрей Андреев'
            ]
        },
        {
            id: '7',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:19:00'),
            author: 'Иван Иванов',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [],
            likes: [
                'Андрей Андреев'
            ]
        },
        {
            id: '8',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:20:00'),
            author: 'Иван Иванов',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [],
            likes: [
                'Андрей Андреев'
            ]
        },
        {
            id: '9',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:21:00'),
            author: 'Иван Иванов',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: []
        },
        {
            id: '10',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:22:00'),
            author: 'Пётр Петров',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: []
        },
        {
            id: '11',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:23:00'),
            author: 'Пётр Петров',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [],
        },
        {
            id: '12',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:24:00'),
            author: 'Пётр Петров',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [
                '#JavaScript'
            ]
        },
        {
            id: '13',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:25:00'),
            author: 'Пётр Петров',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [
                '#JavaScript'
            ]
        },
        {
            id: '14',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:26:00'),
            author: 'Пётр Петров',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: []
        },
        {
            id: '15',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:27:00'),
            author: 'Пётр Петров',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: []
        },
        {
            id: '16',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:28:00'),
            author: 'Пётр Петров',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [
                '#JavaScript'
            ]
        },
        {
            id: '17',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:29:00'),
            author: 'Пётр Петров',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [
                '#JavaScript'
            ]
        },
        {
            id: '18',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:30:00'),
            author: 'Пётр Петров',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [
                '#JavaScript'
            ]
        },
        {
            id: '19',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:31:00'),
            author: 'Пётр Петров',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [],
            likes: [
                'Андрей Андреев'
            ]
        },
        {
            id: '20',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:32:00'),
            author: 'Пётр Петров',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [
                '#JavaScript'
            ],
            likes: [
                'Андрей Андреев'
            ]
        },
    ];

    function compDate (a, b) {
        if (a.createdAt > b.createdAt) return 1;
        if (a.createdAt === b.createdAt) return 0;
        if (a.createdAt < b.createdAt) return -1;
    }

    function compArrays (postsTags, filterConfigTags) {
        let equal = true;
        if (postsTags.length === filterConfigTags.length) {
            for (let i = 0; i < postsTags.length; i++) {
                if (postsTags[i] !== filterConfigTags[j]) {
                    equal = false;
                }
            }
        } else {
            equal = false;
        }
        return equal;
    }

    function validatePost (post) {
        if (typeof post.id === 'string' && post.id !== '' && typeof post.description === 'string'
            && post.description !== '' && post.createdAt === Date && typeof post.author === 'string'
            && post.author !== '') {
            console.log('method: validatePost, valid.');
            return true;
        } else {
            console.log('method: validatePost, invalid.');
            return false;
        }
    }

    return {
        getPost: function () {
            let post = posts.find(item => item.id === id);
            if(post !== null) {
                console.log('method: getPost, found.');
                return post
            }
            else {
                console.log('method: getPost, not found.');
                return null;
            }
        },

        getPosts: function (skip, top, filterConfig) {
        let filteredPosts = [];
        if (filterConfig) {
            if (filterConfig.getAllKeys().has('author')) {
                filteredPosts = posts.filter(item => item.author === filterConfig.author);
            }
            if (filterConfig.getAllKeys().has('createdAt')) {
                filteredPosts = posts.filter(item => item.createdAt === filterConfig.createdAt);
            }
            if (filterConfig.getAllKeys().has('tags')) {
                filteredPosts = posts.filter(item => compArrays(item.tags, filterConfig.tags));
            }
            if (filterConfig.getAllKeys().has('likes')) {
                filteredPosts = posts.filter(item => compArrays(item.likes, filterConfig.likes));
            }

            filteredPosts.sort(compDate);
            console.log('method: getPost, filtered and sorted.');
        }
        else {
            for (let i = skip; i < skip + top; i++) {
                filteredPosts.push(posts[i]);
            }

            filteredPosts.sort(compDate);
            console.log('method: getPost, sorted.');
        }


        return filteredPosts;
    },

    addPost: function (post) {
        if (validatePost(post)) {
            post.id = post[length - 1].id + 1;
            posts.push(post);
            console.log('method: addPost, post added.');
            return true;
        } else {
            console.log('method: addPost, post not added.');
            return false;
        }
    },

   editPost: function (id, post) {
        let complete = false;
        if (post.getAllKeys().has('description')) {
            posts[posts.findIndex(item => item.id === id)].description = post.description;
            complete = true;
            console.log('method: editPost, description edited.');
        }
        if (post.getAllKeys().has('photoLink')) {
            posts[posts.findIndex(item => item.id === id)].photoLink = post.photoLink;
            complete = true;
            console.log('method: editPost, photoLink edited.');
        }
        if (post.getAllKeys().has('tags')) {
            posts[posts.findIndex(item => item.id === id)].tags.splice(0);
            posts[posts.findIndex(item => item.id === id)].tags.concat(post.tags);
            complete = true;
            console.log('method: editPost, tags edited.');
        }
        if (post.getAllKeys().has('likes')) {
            posts[posts.findIndex(item => item.id === id)].likes.splice(0);
            posts[posts.findIndex(item => item.id === id)].likes.concat(post.likes);
            complete = true;
            console.log('method: editPost, likes edited.');
        }
        if(complete === true) {
            console.log('method: editPost, post edited.');
        }
        else {
            console.log('method: editPost, post not edited.');
        }
        return complete;
    },

    removePost: function (id) {
        if(posts.find(item => item.id === id)) {
            posts.splice(posts.findIndex(item => item.id === id), 1);
            console.log('method: removePost, post removed.');
        }
        else {
            console.log('method: removePost, post not fount.')
        }
    }
    }
})();