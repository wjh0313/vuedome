import vue from 'vue'

import vueRouter from 'vue-router'

import personLandReg from '@/components/person-LandReg/person-LandReg.vue'
import teacherLand from '@/components/teacher-land-content-right.vue'
import teacherReg from '@/components/teacher-reg-content-right.vue'
import teacherForget from '@/components/teacher-forget-content-right.vue'
import studentrLand from '@/components/student-land-content-right.vue'
import studentReg from '@/components/student-reg-content-right.vue'
import studentForget from '@/components/student-forget-content-right.vue'
import theHRLand from '@/components/theHR-land-content-right.vue'
import theHRReg from '@/components/theHR-reg-content-right.vue'
import theHRForget from '@/components/theHR-forget-content-right.vue'
import personIndex from '@/components/person-index/person-index.vue'
import personIndexBasic from '@/components/person-index-basic/person-index-basic.vue'
import personIndexMyhome from '@/components/person-index-myHome/person-index-myHome.vue'
import personInfPassword from '@/components/person-basic-inf-password.vue'
import personInfAut from '@/components/person-basic-inf-aut.vue'
import personInfMy from '@/components/person-basic-inf-mymessage.vue'
import personCourse from '@/components/person-index-course/person-index-course.vue'
import personCourseUpVideo from '@/components/person-course-upvideo.vue'
import personCourseVideoImage from '@/components/person-course-videoimage.vue'
import personCourseVideoSuccess from '@/components/person-course-videoSuccess.vue'
import personCourseMycouser from '@/components/person-course-mycourse.vue'
import personCourseMyactive from '@/components/person-course-myActive.vue'
import personQueAndAns from '@/components/person-index-queAndans/person-index-queAndans.vue'
import personQueAndAnsMyask from '@/components/person-queAndans-myAsk.vue'
import personQueAndMyanswer from '@/components/person-queAndans-myanswer.vue'
import personmyMoney from '@/components/person-index-myMoney/person-index-myMoney.vue'
import personmyMoneymyHave from '@/components/person-mymoney-myHave.vue'
import personmyMoneymyCard from '@/components/person-mymoney-myCard.vue'
vue.use(vueRouter)

export default new vueRouter ({
    mode : 'history',
    routes : [
        {
            path:'/',
            redirect: '/LandReg/',
        },
        {
            path : '/LandReg/',
            name:'personLandReg',
            redirect: '/LandReg/teacherLand',
            component:personLandReg,
            children:[
                {
                    path:'teacherLand',
                    name:'teacherLand',
                    meta: {
                        title: '老师登录页面'
                    },
                    component:teacherLand,
                },
                {
                    path:'studentLand',
                    name:'studentLand',
                    meta: {
                        title: '学生登录页面'
                    },
                    component:studentrLand,
                },
                {
                    path:'theHRLand',
                    name:'theHRLand',
                    meta: {
                        title: 'HR登录页面'
                    },
                    component:theHRLand,
                },
                {
                    path:'teacherReg',
                    name:'teacherReg',
                    meta: {
                        title: '老师注册页面'
                    },
                    component:teacherReg,
                },
                {
                    path:'studentReg',
                    name:'studentReg',
                    meta: {
                        title: '学生注册页面'
                    },
                    component:studentReg,
                },
                {
                    path:'theHRReg',
                    name:'theHRReg',
                    meta: {
                        title: 'HR注册页面'
                    },
                    component:theHRReg,
                },
                {
                    path:'teacherForget',
                    name:'teacherForget',
                    meta: {
                        title: '老师忘记密码页面'
                    },
                    component:teacherForget,
                },
                {
                    path:'studentForget',
                    name:'studentForget',
                    meta: {
                        title: '学生忘记密码页面'
                    },
                    component:studentForget,
                },
                {
                    path:'theHRForget',
                    name:'theHRForget',
                    meta: {
                        title: 'HR忘记密码页面'
                    },
                    component:theHRForget,
                },
            ]
        },
        {
            path : '/person/',
            name:'personIndex',
            redirect: '/person/myHome',
            component:personIndex,
            children:[
                {
                    path : 'basicInformation/',
                    name : 'personIndexBasic',
                    redirect: '/person/basicInformation/mymessage',
                    component : personIndexBasic,
                    children:[
                        {
                            path:'password',
                            name : 'personInfPassword',
                            meta: {
                                title: '老师修改密码页面'
                            },
                            component:personInfPassword,
                        },
                        {
                            path:'aut',
                            name : 'personInfAut',
                            meta: {
                                title: '老师认证信息页面'
                            },
                            component:personInfAut,
                        },
                        {
                            path:'mymessage',
                            name : 'personInfMy',
                            meta: {
                                title: '老师个人信息页面'
                            },
                            component:personInfMy,
                        },
                    ]
                },
                {
                    path : 'courseManger/',
                    name : 'personCourse',
                    redirect: '/person/courseManger/myCourse',
                    component:personCourse,
                    children:[
                        {
                            path:'upvideo',
                            name:'personCourseUpVideo',
                            meta: {
                                title: '老师添加课程视频页面'
                            },
                            component:personCourseUpVideo,
                        },
                        {
                            path:'videoImage',
                            name:'personCourseVideoImage',
                            meta: {
                                title: '老师添加课程视频信息页面'
                            },
                            component:personCourseVideoImage,
                        },
                        {
                            path:'videoing',
                            name:'personCourseVideoSuccess',
                            meta: {
                                title: '老师添加课程视频信息成功页面'
                            },
                            component:personCourseVideoSuccess,
                        },
                        {
                            path:'myCourse',
                            name:'personCourseMycouser',
                            meta: {
                                title: '老师课程管理页面'
                            },
                            component:personCourseMycouser,
                        },
                        {
                            path:'myActive',
                            name:'personCourseMyactive',
                            meta: {
                                title: '老师活动页面'
                            },
                            component:personCourseMyactive,
                        }
                    ]
                },
                {
                    path:'queAndans/',
                    name:'personQueAndAns',
                    redirect: '/person/queAndans/myask',
                    component:personQueAndAns,
                    children:[
                        {
                            path:'myask',
                            name:'personQueAndMyanswer',
                            meta: {
                                title: '老师我的提问页面'
                            },
                            component:personQueAndMyanswer,
                        },
                        {
                            path:'myanswer',
                            name:'personQueAndAnsMyask',
                            meta: {
                                title: '老师我的回答页面'
                            },
                            component:personQueAndAnsMyask,
                        },
                    ]
                },
                {
                    path : 'myHome',
                    name:'personIndex',
                    meta: {
                        title: '老师主页页面'
                    },
                    component:personIndexMyhome,
                },
                {
                    path : 'myMoney/',
                    name:'personmyMoney',
                    redirect: '/person/myMoney/myHave',
                    component:personmyMoney,
                    children:[
                        {
                            path:'myHave',
                            name:'myMonermyHave',
                            meta: {
                                title: '老师我的收入页面'
                            },
                            component:personmyMoneymyHave,
                        },
                        {
                            path:'myCard',
                            name:'myMonermyCard',
                            meta: {
                                title: '老师我的银行卡页面'
                            },
                            component:personmyMoneymyCard,
                        },
                    ]
                },
            ]
        },
    ]
})