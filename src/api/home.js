import Mock from 'Mockjs'
import axios from 'axios'
const base = 'http://localhost:8080/api'

Mock.mock(base + '/movies/hot', 'get', {
    code: 1,
    "data|10": [
        {
            id: "@increment",
            "img|+1": ['https://pic.maizuo.com/usr/movie/85f4fc27c6b90d7e84295e115837728b.jpg?x-oss-process=image/quality,Q_70',
                'https://pic.maizuo.com/usr/movie/91f5bcd51621c9d7f2da217b1c208c7b.jpg?x-oss-process=image/quality,Q_70',
                'https://pic.maizuo.com/usr/movie/a2d61d2ac9452a246cba2354162fcab9.jpg?x-oss-process=image/quality,Q_70',
                'https://pic.maizuo.com/usr/movie/3b5e3c05f558ff4edd12ffc2bd72fec1.jpg?x-oss-process=image/quality,Q_70',
                'https://pic.maizuo.com/usr/movie/61f497be0a190f86f8bfb092d430d0f1.jpg?x-oss-process=image/quality,Q_70',
                'https://pic.maizuo.com/usr/movie/d5e399dba2f9a5378407dc4cfe4e731d.jpg?x-oss-process=image/quality,Q_70',
                'https://pic.maizuo.com/usr/movie/227ffe3aa02f6a503c94e6674c47d1b9.jpg?x-oss-process=image/quality,Q_70',
                'https://pic.maizuo.com/usr/movie/460ab5a7b1331632cce32eba234ac6b9.jpg?x-oss-process=image/quality,Q_70',
                'https://pic.maizuo.com/usr/movie/7cfc6dce2e2f130db2fc28153b370dc9.jpg?x-oss-process=image/quality,Q_70',
                'https://pic.maizuo.com/usr/movie/a3c0d7453403c5aadee9c567b1d4e6b1.jpg?x-oss-process=image/quality,Q_70'
            ],
            nm: '@ctitle(3, 5)',
            "sc|1-10.1-2": 1,
            "star|3-4": "@cname()",
            showInfo: '@csentence(10,15)'
        }
    ]
})

Mock.mock(base + '/movies/coming', 'get', {
    code: 1,
    'data|3': [
        {
            date: '@date("yyyy-MM-dd")',
            "items|2-5": [
                {
                    id: '@increment(100)',
                    "img|+1": ['https://pic.maizuo.com/usr/movie/85f4fc27c6b90d7e84295e115837728b.jpg?x-oss-process=image/quality,Q_70',
                        'https://pic.maizuo.com/usr/movie/91f5bcd51621c9d7f2da217b1c208c7b.jpg?x-oss-process=image/quality,Q_70',
                        'https://pic.maizuo.com/usr/movie/a2d61d2ac9452a246cba2354162fcab9.jpg?x-oss-process=image/quality,Q_70',
                        'https://pic.maizuo.com/usr/movie/3b5e3c05f558ff4edd12ffc2bd72fec1.jpg?x-oss-process=image/quality,Q_70',
                        'https://pic.maizuo.com/usr/movie/61f497be0a190f86f8bfb092d430d0f1.jpg?x-oss-process=image/quality,Q_70',
                        'https://pic.maizuo.com/usr/movie/d5e399dba2f9a5378407dc4cfe4e731d.jpg?x-oss-process=image/quality,Q_70',
                        'https://pic.maizuo.com/usr/movie/227ffe3aa02f6a503c94e6674c47d1b9.jpg?x-oss-process=image/quality,Q_70',
                        'https://pic.maizuo.com/usr/movie/460ab5a7b1331632cce32eba234ac6b9.jpg?x-oss-process=image/quality,Q_70',
                        'https://pic.maizuo.com/usr/movie/7cfc6dce2e2f130db2fc28153b370dc9.jpg?x-oss-process=image/quality,Q_70',
                        'https://pic.maizuo.com/usr/movie/a3c0d7453403c5aadee9c567b1d4e6b1.jpg?x-oss-process=image/quality,Q_70'
                    ],
                    nm:'@ctitle(3,5)',
                    "sc|100-10000":1,
                    vertion:'@integer(0,1)',//3D
                    "star|2-4":'@cname()·',
                    'showInfo':'即将上映'
                }
            ],
        }
    ]
})



export function getHotMovies(cb) {
    axios.get(base + '/movies/hot').then(res => {
        // res.data就是服务端响应的数据
        // res.data
        cb(res.data)
    })
}

export function getComingMovies(){
    return axios.get(base+'/movies/coming').then(res=>Promise.resolve(res.data))
}