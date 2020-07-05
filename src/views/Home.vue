<template>
    <div class="home">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <Upload
                multiple
                type="drag"
                name="multipartFile"
                :before-upload="beforeUpload"
                :on-progress="onProgress"
                :on-success="onSuccess"
                :on-error="onError"
                :data="fileData"
                :action="uploadUrl">
            <div style="padding: 20px 0">
                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                <p>Click or drag files here to upload</p>
            </div>
        </Upload>
        <Button type="primary" @click="downFile">下载</Button>
        <Button type="primary" @click="getTest">get</Button>

    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import util from "@/utils/util";
    import http from "@/utils/http";


    export default {
        name: 'Home',
        components: {
            HelloWorld
        },
        data() {
            return {
                uploadUrl: "/api" + "/file/uploadFile",
                fileData: {}
            }
        },
        methods: {
            onProgress: function (data) {
                console.log(data);
            },
            onSuccess: function (data) {
                console.log(data);
            },
            onError: function (error) {
                console.log(error);
            },
            beforeUpload: function (file) {
                console.log(file);
                this.fileData["fileName"] = file.name;
            },
            downFile: function () {
                http.post("/file/downloadFile", {"fileName":"iconfont.ttf"}).then((data)=>{
                    console.log(data);

                }).catch((error)=>{
                    console.log(error)
                });
            },
            getTest:function () {
                http.get("/test/test",{}).then((data)=>{
                    console.log(data);
                }).catch((error)=>{
                   console.log(error);
                });
            }

        },
        mounted: function () {
            console.log(util.baseUrl);
        }

    }
</script>
