<template>
    <div class="loginPart">
        <div class="loginTop"><span><i class="logo1"></i>XX餐厅后台管理系统登录</span></div>
        <div class="loginMain">
            <i></i>
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
              <el-form-item label="用户名" prop="checkName">
                <el-input v-model.number="ruleForm2.checkName"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input type="password"  id="write" v-model="ruleForm2.pass" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="身份">
                <el-select v-model="region1" placeholder="您的身份" class="selectVal">
                  <el-option label="管理员" value="admin"></el-option>
                  <el-option label="员工" value="member"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm">登录</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
              </el-form-item>
            </el-form>
        </div>
        <div id="container">
            <ul id="keyboard">
                <li class="symbol"><span class="off">`</span><span class="on">~</span></li>
                <li class="symbol"><span class="off">1</span><span class="on">!</span></li>
                <li class="symbol"><span class="off">2</span><span class="on">@</span></li>
                <li class="symbol"><span class="off">3</span><span class="on">#</span></li>
                <li class="symbol"><span class="off">4</span><span class="on">$</span></li>
                <li class="symbol"><span class="off">5</span><span class="on">%</span></li>
                <li class="symbol"><span class="off">6</span><span class="on">^</span></li>
                <li class="symbol"><span class="off">7</span><span class="on">&amp;</span></li>
                <li class="symbol"><span class="off">8</span><span class="on">*</span></li>
                <li class="symbol"><span class="off">9</span><span class="on">(</span></li>
                <li class="symbol"><span class="off">0</span><span class="on">)</span></li>
                <li class="symbol"><span class="off">-</span><span class="on">_</span></li>
                <li class="symbol"><span class="off">=</span><span class="on">+</span></li>
                <li class="delete lastitem">delete</li>
                <li class="tab">tab</li>
                <li class="letter">q</li>
                <li class="letter">w</li>
                <li class="letter">e</li>
                <li class="letter">r</li>
                <li class="letter">t</li>
                <li class="letter">y</li>
                <li class="letter">u</li>
                <li class="letter">i</li>
                <li class="letter">o</li>
                <li class="letter">p</li>
                <li class="symbol"><span class="off">[</span><span class="on">{</span></li>
                <li class="symbol"><span class="off">]</span><span class="on">}</span></li>
                <li class="symbol lastitem"><span class="off">\</span><span class="on">|</span></li>
                <li class="capslock">caps lock</li>
                <li class="letter">a</li>
                <li class="letter">s</li>
                <li class="letter">d</li>
                <li class="letter">f</li>
                <li class="letter">g</li>
                <li class="letter">h</li>
                <li class="letter">j</li>
                <li class="letter">k</li>
                <li class="letter">l</li>
                <li class="symbol"><span class="off">;</span><span class="on">:</span></li>
                <li class="symbol"><span class="off">'</span><span class="on">&quot;</span></li>
                <li class="return lastitem">return</li>
                <li class="left-shift">shift</li>
                <li class="letter">z</li>
                <li class="letter">x</li>
                <li class="letter">c</li>
                <li class="letter">v</li>
                <li class="letter">b</li>
                <li class="letter">n</li>
                <li class="letter">m</li>
                <li class="symbol"><span class="off">,</span><span class="on">&lt;</span></li>
                <li class="symbol"><span class="off">.</span><span class="on">&gt;</span></li>
                <li class="symbol"><span class="off">/</span><span class="on">?</span></li>
                <li class="right-shift lastitem">shift</li>
                <li class="space lastitem">&nbsp;</li>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript">
    import './src/components/login/login.scss'
    import './src/components/login/css/style.css'
    import $ from 'jquery'
    import http from './src/utils/httpClient.js'
    $(function(){
        var $write = $('#write');
            var shift = false;
            var capslock = false;
        $('#keyboard li').click(function(){
            var $this = $(this),
                character = $this.html(); // If it's a lowercase letter, nothing happens to this variable
            // Shift keys
            if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) {
                $('.letter').toggleClass('uppercase');
                $('.symbol span').toggle();
                
                shift = (shift === true) ? false : true;
                capslock = false;
                return false;
            }
            
            // Caps lock
            if ($this.hasClass('capslock')) {
                $('.letter').toggleClass('uppercase');
                capslock = true;
                return false;
            }
            // Delete
            if ($this.hasClass('delete')) {
                var html = $write.val();
                $write.val(html.substr(0, html.length - 1));
                return false;
            }
            // Special characters
            if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
            if ($this.hasClass('space')) character = ' ';
            if ($this.hasClass('tab')) character = "\t";
            if ($this.hasClass('return')) character = "\n";
            
            // Uppercase letter
            if ($this.hasClass('uppercase')) character = character.toUpperCase();
            
            // Remove shift once a key is clicked.
            if (shift === true) {
                $('.symbol span').toggle();
                if (capslock === false) $('.letter').toggleClass('uppercase');
                
                shift = false;
            }
            // Add the character
            $write.val($write.val() + character);
            $write[0].value = $write.val();
        });
    });
    export default {
        name: 'app',
        data () {
            return {
                regStatus: '未注册',
                index:'首页',
                region1: '',
                //页面数据
                indexData:{
                    //数据管理
                    foodList:'菜单',
                    orderList:'订单',
                    memberList:'员工',
                    adminList:'管理员',
                    adminLimit:'设置'
                },
                ruleForm2: {
                    pass: '',
                    checkPass: '',
                    checkName:''
                },
                api: "login",
                rules2: {
                  
                }
            }
        },
        methods: {
            submitForm() {
               var username = $($("form").find("input").eq(0)).val();
               var password = $($("form").find("input").eq(1)).val();
               var identity = $($("form").find("input").eq(2)).val();
               if(username == ""){
               		alert("请输入用户名")
               		return
               }else if(password == ""){
               		alert("请输入密码")
               		return
               }else if(identity == ""){
               		alert("请输入身份")
               		return
               }
               var self = this;
				http.post({
					url: this.api,
					params: {
						username:username,
						password:password,
						identity:identity,
					}
				}).then(res => {
					if(res.data.statue){
						var now = new Date();
						now.setDate(now.getDate()+1);
						document.cookie = 'token='+ res.data.token + ';expires=' + now;
						window.location.href = 'index.html';
					}else{
						alert("请重新确认身份信息")
					}
				})
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
                $('input').val('');
            }
        }
    }
</script>