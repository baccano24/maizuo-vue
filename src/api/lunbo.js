import Mock from 'Mockjs'
import axios from 'axios'
const base = 'http://localhost:8080/api'


Mock.mock(base + '/home/lunbo', 'post', {
    code: 1,
    'data|6': [
        {
            "items|1": [
                {
                    id: '@increment(1)',
                    "img|1":[
                        'https://static.maizuo.com/v5/upload/69d58c31feb894f3142461b7357ef81c.jpg?x-oss-process=image/quality,Q_70',
                        'https://static.maizuo.com/v5/upload/1cb61fd417dfa2add09bc72d336f6ed1.jpg?x-oss-process=image/quality,Q_70',
                        'https://static.maizuo.com/v5/upload/503e813bd9df6a3c463e6f475a7e6703.jpg?x-oss-process=image/quality,Q_70',
                        'https://static.maizuo.com/v5/upload/8fd3a177f34793eca62d9faad60a44f4.jpg?x-oss-process=image/quality,Q_70',
                        'https://static.maizuo.com/v5/upload/1c630f6fd20828be0ea601e301747f03.jpg?x-oss-process=image/quality,Q_70',
                        'https://static.maizuo.com/b03a32d20eac5438d8d130714d4141b9.jpg?x-oss-process=image/quality,Q_70'
                    ]
                }
            ],
        }
    ]
})


export function getHomeLunbo(){
    return axios.get(base+'/home/lunbo').then(res=>Promise.resolve(res.data))
}

/**
 *  bannerData:[
        {url:'https://static.maizuo.com/v5/upload/69d58c31feb894f3142461b7357ef81c.jpg?x-oss-process=image/quality,Q_70',id:1},
        {url:'https://static.maizuo.com/v5/upload/1cb61fd417dfa2add09bc72d336f6ed1.jpg?x-oss-process=image/quality,Q_70',id:2},
        {url:'https://static.maizuo.com/v5/upload/503e813bd9df6a3c463e6f475a7e6703.jpg?x-oss-process=image/quality,Q_70',id:3},
        {url:'https://static.maizuo.com/v5/upload/8fd3a177f34793eca62d9faad60a44f4.jpg?x-oss-process=image/quality,Q_70',id:4},
        {url:'https://static.maizuo.com/v5/upload/1c630f6fd20828be0ea601e301747f03.jpg?x-oss-process=image/quality,Q_70',id:5},
        {url:'https://static.maizuo.com/b03a32d20eac5438d8d130714d4141b9.jpg?x-oss-process=image/quality,Q_70',id:6},
        
      ] */