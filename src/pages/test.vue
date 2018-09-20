<template>
    <div>
        <div class="d1">上</div>
        <div class="container">
            <div class="d2">左</div>
            <div class="d3">
                <div class="inner">
                    右
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    
}
</script>
<style>
*{
    margin: 0px;
    padding: 0px;
}
.d1{
    height: 100px;
    width: 100%;
    background-color: pink;
    position: fixed;
}
.d2, .d3{
    margin-top: 100px;;    
    float: left;    
}
.d2{
    background-color:rgb(243, 156, 18);
    width: 30%;
    position: fixed;
    top:0px;
    bottom: 0px;
    left:0px;
}
.d3{
    background-color:#f4f4f4;
    padding: 20px;
    margin-left: 30%;
    width: 70%;
    box-sizing: border-box;
}
.inner{
    background-color: #00c0ef;
}
</style>

