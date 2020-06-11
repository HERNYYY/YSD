
    /*批量删除入库单*/
    // function delAll(argument){
    //     var ids =  [];
    //     $('tbody input').each(function(index, el){
    //         if($(this).prop('checked')){
    //             ids.push($(this).val());
    //         }
    //     });
    //     layer.confirm('确认要删除吗？',function(index){
    //         //发送异步请求
    //         layer.msg('删除成功',{icon:1});
    //         $(".layui-form-checked").not('.header').parents('tr').remove();
    //     })
    // }

    function acceptance(obj,id){
        layer.confirm('确认验收？',function(index){
            //发送异步请求
            layer.msg('验收成功',{icon:1});
            $(obj).addClass('layui-btn-disabled').removeAttr('onclick');
        })
    }


