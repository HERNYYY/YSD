layui.use(['laydate', 'form'],
        function() {
            var laydate = layui.laydate;

            //执行一个laydate实例
            laydate.render({
                elem: '#start' //指定元素
            });

            //执行一个laydate实例
            laydate.render({
                elem: '#end' //指定元素
            });

            //复选框多选 
            var form = layui.form;
            // 监听全选
            form.on('checkbox(checkall)', function(data){

            if(data.elem.checked){
              $('tbody input').prop('checked',true);
            }else{
              $('tbody input').prop('checked',false);
            }
              form.render('checkbox');
            }); 

            form.on('checkbox(checkone)', function(data){
                //其中一个未选中，取消全选
                var item = $('tbody input');
                for(var i = 0; i < item.length; i++){
                    if(item[i].checked == false){
                        $('thead input').prop('checked',false);
                        form.render('checkbox');
                        break;
                    }
                }
                //都选中，勾上全选 
                var all = item.length;
                for(var i = 0; i< item.length; i++){
                    if(item[i].checked == true){
                        all--;
                    }
                }
                if(all == 0){
                    $('thead input').prop('checked',true);
                    form.render('checkbox');
                }
            })

        });

        /*点击冒泡*/
        // $('tbody>tr>td').on('click',function(){
        //     console.log($(this).siblings('td').children('input'))
        //     $(this).siblings('td').children('input[type=checkbox]').prop('checked',true);
        // })

        /*用户-停用*/
        function member_stop(obj, id) {
            layer.confirm('确认要停用吗？',
            function(index) {

                if ($(obj).attr('title') == '启用') {

                    //发异步把用户状态进行更改
                    $(obj).attr('title', '停用');
                    $(obj).find('i').html('&#xe62f;');

                    $(obj).parents("tr").find(".td-status").find('span').addClass('layui-btn-disabled').html('已停用');
                    layer.msg('已停用!', {
                        icon: 5,
                        time: 1000
                    });

                } else {
                    $(obj).attr('title', '启用');
                    $(obj).find('i').html('&#xe601;');

                    $(obj).parents("tr").find(".td-status").find('span').removeClass('layui-btn-disabled').html('已启用');
                    layer.msg('已启用!', {
                        icon: 5,
                        time: 1000
                    });
                }

            });
        }

        /*用户-删除*/
        function member_del(obj, id) {
            layer.confirm('确认要删除吗？',
            function(index) {
                //发异步删除数据
                $(obj).parents("tr").remove();
                layer.msg('已删除!', {
                    icon: 1,
                    time: 1000
                });
            });
        }

        //批量删除
        function delAll(argument){
            var ids =  [];
            $('tbody input').each(function(index, el){
                if($(this).prop('checked')){
                    ids.push($(this).val());
                }
            });
            if(ids.length == 0){
                layer.msg('请先选中一项',{icon:2});
                return;
            }else{
              layer.confirm('确认要删除吗？',function(index){
                //发送异步请求
                layer.msg('删除成功',{icon:1});
                $(".layui-form-checked").not('.header').parents('tr').remove();
            })  
            }
            
        }