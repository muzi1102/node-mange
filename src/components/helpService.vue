<template>
<div>
    <div class="help-container-head">
        <span>帮助和服务</span>
    </div>
    <div class="container-body">
        <div class="help-center">
            <h4>
                <span>帮助中心</span>
                <a href="javascript:;">进入></a>
            </h4>
            <div>
                <slot name="helpSolt"></slot>
            </div>
        </div>
        <div class="service-center">
            <h4>
                <span>有赞服务窗口</span>
                <div>
                    <p>在线客服</p>
                </div>
            </h4>
        </div>
        <div class="find-service">
            <h4>
                <span>找服务</span>
                <a href="javascript:;">发布服务需></a>
            </h4>
        </div>
    </div>
</div>
</template>
<script>

</script>
<style scoped>
    .help-container-head{
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
        border-bottom: 1px solid #e5e5e5;
    }
    .container-body{
        padding: 10px 10px 60px;
    }
</style>