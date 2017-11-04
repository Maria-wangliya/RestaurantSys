<template>
    <div class="main homePart">
        <div @click="index"><span><i class="glyphicon glyphicon-th"></i></span><h3>首页</h3><p>查看导引页</p></div>
        <div @click="menu"><span><i class="glyphicon glyphicon-th-list"></i></span><h3>菜单</h3><p>查看菜单列表</p></div>
        <div @click="order"><span><i class="glyphicon glyphicon-list-alt"></i></span><h3>订单</h3><p>查看订单详情</p></div>
        <div @click="member"><span><i class="glyphicon glyphicon-heart"></i></span><h3>员工</h3><p>查看员工信息</p></div>
        <div @click="admin"><span><i class="glyphicon glyphicon-user"></i></span><h3>管理员</h3><p>查看管理员信息</p></div>
        <div @click="limit"><span><i class="glyphicon glyphicon-cog"></i></span><h3>设置</h3><p>设置权限</p></div>
    </div>
</template>

<script type="text/javascript">
    import router from '../../router'
    export default {
        data () {
            return {
                regStatus: '已登录'
            }
        },
        methods:{
            index(){
            },
            menu(){
                router.push({name:'allFoods'});
            },
            order(){
                router.push({name:'orderList'});
            },
            member(){
                router.push({name:'memberList'});
            },
            admin(){
                router.push({name:'adminList'})
            },
            limit(){
                router.push({name:'adminLimit'})
            }
        },
        components: {
        }
    }
</script>