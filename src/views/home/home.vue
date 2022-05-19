<template>
  <div class="home">
    <!-- <div @click="selected()">12331</div> -->
    <div class="home-select">
      公司：<el-select v-model="value" placeholder="请选择" size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="home-table">
      <div class="home-table-top">
        <el-button
          class="table-add"
          type="success"
          size="mini"
          v-show="isShow"
          @click="dialogVisible = true"
          >新增项目</el-button
        >
        <el-select
          v-show="isShow"
          class="table-select"
          v-model="moreovalue"
          size="mini"
          filterable
          allow-create
          default-first-option
          placeholder="请选择文章标签"
        >
          <el-option
            v-for="item in moreoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-button size="mini" @click="tianIsHsow = true" v-if="!isShow"
          >引入项目</el-button
        >
      </div>
      <div class="hont-table-buttom">
        <el-table border :data="tableData" style="width: 100%">
          <el-table-column type="expand">
            <el-table
              :show-header="false"
              :data="tablelist"
              style="width: 100%"
            >
              <el-table-column width="48"> </el-table-column>

              <el-table-column prop="name" width="240"> </el-table-column>
              <el-table-column prop="state" width="140"> </el-table-column>
              <el-table-column prop="Covered" width="140"> </el-table-column>
              <el-table-column prop="floorage" width="140"> </el-table-column>
              <el-table-column prop="data" width="140"> </el-table-column>
              <el-table-column align="right">
                <template slot-scope="scope">
                  <div class="operation">
                    <span v-show="isShow">编辑</span>
                    <span>删除</span>
                    <span>详情</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column align="left" width="20"> </el-table-column>
            </el-table>
          </el-table-column>
          <el-table-column align="left" prop="name" width="240">
            <template slot="header" slot-scope="scope">
              <div class="table-title">
                <div class="table-title-s">项目名称</div>
                <ul>
                  <li
                    v-for="(item, index) in tableDataSelect"
                    :key="index"
                    :class="{ activeCss: activeVar == index }"
                    @click="activeVar = index"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="项目状态" prop="state" width="140">
          </el-table-column>
          <el-table-column label="总占地面积" prop="Covered" width="140">
          </el-table-column>
          <el-table-column label="总占建筑面积" prop="floorage" width="140">
          </el-table-column>
          <el-table-column label="项目开始日期" prop="data" width="140">
          </el-table-column>
          <el-table-column label="操作" align="right">
            <template slot-scope="scope">
              <div class="operation">
                <span @click="isShows()" v-show="isShow">新增分期</span>
                <span v-show="isShow">编辑</span>
                <span>删除</span>
                <span>详情</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column align="left" width="20">
            <template slot="header" slot-scope="scope">
              <div class="refresh">
                <i class="el-icon-refresh"></i>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div></div>
    <el-dialog
      title="新添项目"
      class="add"
      :visible.sync="dialogVisible"
      :show-close="false"
      width="1200px"
      :before-close="handleClose"
    >
      <div class="homeadd">
        <div class="add-top">
          <span>基本信息</span>
        </div>

        <div class="add-from">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="70px"
            class="demo-ruleForm"
          >
            <el-col :span="11">
              <el-form-item label="项目编号" prop="itemNumber">
                <el-input
                  style="width: 400px"
                  size="mini"
                  v-model="ruleForm.itemNumber"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="项目名称" prop="name">
                <el-input
                  style="width: 400px"
                  size="mini"
                  v-model="ruleForm.name"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="项目负人" prop="projectLeader">
                <el-input
                  style="width: 400px"
                  size="mini"
                  v-model="ruleForm.projectLeader"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="推广名称" prop="PromoteTheName">
                <el-input
                  style="width: 400px"
                  size="mini"
                  v-model="ruleForm.PromoteTheName"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="项目地址" prop="projectAddress">
                <el-input
                  style="width: 400px"
                  size="mini"
                  v-model="ruleForm.projectAddress"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="所属地区" prop="areaName">
                <el-input
                  style="width: 400px"
                  size="mini"
                  v-model="ruleForm.areaName"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="公司名称" prop="companyName">
                <span>{{ ruleForm.companyName }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="项目状态" prop="projectStatus">
                <el-select
                  v-model="ruleForm.projectStatus"
                  size="mini"
                  style="width: 400px"
                >
                  <el-option
                    v-for="item in optionsss"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="开发方式" prop="developmentMode">
                <el-select
                  v-model="ruleForm.developmentMode"
                  size="mini"
                  style="width: 400px"
                >
                  <el-option
                    v-for="item in optionss"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="收益比例" prop="EarningsRatio">
                <el-input
                  style="width: 400px"
                  size="mini"
                  @input="RatioChange($event, ruleForm.EarningsRatio)"
                  v-model="ruleForm.EarningsRatio"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="总体描述" prop="describe">
                <el-input
                  type="textarea"
                  style="width: 950px"
                  v-model="ruleForm.describe"
                ></el-input>
                <div class="describe">最多可以输入10000字</div>
              </el-form-item>
            </el-col>
          </el-form>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >保存</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="引入项目"
      class="introduce"
      :visible.sync="tianIsHsow"
      :show-close="false"
      width="500px"
      :before-close="TianClose"
      center
    >
      <div class="introduce-project">
        <div class="introduce-project-top">
          <span class="introduce-project-name">组织名称</span>
          <span>武汉aaa公司</span>
        </div>
        <div class="introduce-project-Tree">
          <div class="Tree-title">
            <span class="Tree-title-s">项目名称</span>
           
              <span
                v-for="(item, index) in tableDataSelect"
                :key="index"
                :class="{ activeCss: activeVar == index }"
                @click="activeVar = index"
              >
                {{ item }}
              </span>
          </div>
          <div>
            <el-tree
              :data="projectTree"
              show-checkbox
              node-key="id"
              :default-expanded-keys="[]"
              :default-checked-keys="[]"
              :props="defaultProps"
            >
            </el-tree>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
         <el-button type="success" style="width:100px" @click="tianIsHsow = false">引入</el-button>
    <el-button  style="width:100px" @click="tianIsHsow = false">取 消</el-button>
   
  </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
        projectTree: [{
          id: 1,
          label: '软件园',
          children: [{
            id: 4,
            label: '项目展示',
          
          }]
        }, 
       ],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
    
      tianIsHsow: false,
      isShow: true,
      optionsss: [
        {
          value: "选项1",
          label: "选项1",
        },
        {
          value: "选项2",
          label: "选项1",
        },
        {
          value: "选项3",
          label: "选项1",
        },
      ],
      optionss: [
        {
          value: "选项1",
          label: "选项2",
        },
        {
          value: "选项2",
          label: "选项2",
        },
        {
          value: "选项3",
          label: "选项2",
        },
      ],
      ruleForm: {
        itemNumber: "",
        name: "",
        projectLeader: "",
        PromoteTheName: "",
        projectAddress: "",
        areaName: "",
        companyName: "123",
        projectStatus: "",
        developmentMode: "",
        EarningsRatio: "",
        describe: "",
      },
      rules: {
        itemNumber: [{ required: true, message: "不能为空", trigger: "blur" }],
        name: [{ required: true, message: "不能为空", trigger: "blur" }],
        projectLeader: [
          { required: true, message: "不能为空", trigger: "blur" },
        ],
        EarningsRatio: [],
      },
      dialogVisible: false,
      activeVar: 0,
      tableDataSelect: [1, 2],
      tableData: [
        {
          id: "1",
          name: "1",
          state: "1",
          Covered: "1",
          floorage: "1",
          data: "1",
        },
      ],
      tablelist: [
        {
          id: "1",
          name: "1",
          state: "1",
          Covered: "1",
          floorage: "1",
          data: "1",
        },
      ],
      options: [
        {
          value: "1",
          label: "公司",
        },
      ],
      value: "1",

      moreoptions: [
        {
          value: "HTML",
          label: "更多操作",
        },
        {
          value: "CSS",
          label: "更多操作",
        },
        {
          value: "JavaScript",
          label: "更多操作",
        },
      ],
      moreovalue: "HTML",
    };
  },
  methods: {
    handleClose() {},
    TianClose() {},
    isShows() {
      this.isShow = false;
    },
    RatioChange(e, row) {
      //  this.ruleForm.EarningsRatio = e.replace(/[^\d.]/g, '');
      //   //  row.Ratio = e//清除“数字”和“.”以外的字符
      //   this.ruleForm.EarningsRatio =  this.ruleForm.EarningsRatio.replace(/^\./g, '');
      //   this.ruleForm.EarningsRatio = this.ruleForm.EarningsRatio.replace(/\.{2,}/g, '.');
      //   this.ruleForm.EarningsRatio=  this.ruleForm.EarningsRatio.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
      //  this.ruleForm.EarningsRatio =  this.ruleForm.EarningsRatio.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
      //   if ( this.ruleForm.EarningsRatio.indexOf('.') < 0 && row.Ratio != '') {
      //    this.ruleForm.EarningsRatio = parseFloat( this.ruleForm.EarningsRatio);
      //   }
      //   if (e > 100) {
      //      this.ruleForm.EarningsRatio  = e.slice(0, 3);
      //     return this.$error('比例不能超过100');
      //   }
    },
    selected() {
      this.$router.push("login");
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    tiantia(index) {
      console.log(index);
    },
    tableAdd() {
      this.$router.push("homeadd");
    },
  },
};
</script>
<style scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.home {
  width: 85.5%;
  height: 90%;
  margin: 10px;
  float: left;
  background-color: #fff;
}
.home-select {
  margin: 20px;
}
.home-select /deep/ .el-input__inner {
  border-radius: 0px;
}
.home-table {
  background-color: #fff;
  margin-top: 10px;
}
.table-add {
  margin-right: 10px;
}
.add-from {
  margin-top: 15px;
}
.hont-table-buttom /deep/ th {
  background-color: #f4f5f9;
}
/* .hont-table-buttom /deep/ td{
  background-color: #f4f5f9;
} */
.home-table-top {
  float: right;
  margin: 5px 40px;
}
.table-select {
  width: 100px;
}
.table-select /deep/ .el-input__inner {
  border-radius: 0px;

     
}
.table-title {
}
.table-title-s {
  float: left;
}
.table-title ul li {
  float: left;
  height: 20px;

  margin: 1px 5px 0px 5px;
}
.activeCss {
  width: 20px;
  text-align: center;
  border-radius: 50%;
  background-color: #44b549;
  color: #fff;
}
.operation {
  color: #6d9aec;
}
.operation span {
  margin: 0 5px;
}
.refresh i {
  margin-left: -6px;
  font-weight: 700;
  cursor: pointer;
}
.hont-table-buttom {
  margin: 0px 15px;
  background-color: #f4f5f9;
}
.hont-table-buttom /deep/ .el-table__cell {
  padding: 0px 0px !important;
}
.hont-table-buttom /deep/.el-table--border .el-table__cell,
.el-table__body-wrapper .el-table--border.is-scrolling-left ~ .el-table__fixed {
  border-right: none;
}
.operation span {
  cursor: pointer;
}
.add {
}
.add-top {
  padding: 5px;
  background-color: #f4f5f9;
  border: 1px solid #d3d5d9;
}
.homeadd {
  margin: 0px 10px;
}
.add /deep/ .el-dialog__body {
  padding: 0px;
}
.add /deep/.el-form-item {
  margin-bottom: 5px;
}
.add /deep/.el-input__inner {
  border-radius: 0px;
}
.add /deep/ .el-form-item__label {
  margin-right: 45px;
  font-size: 12px;
}
.add /deep/ .el-dialog__header {
  padding: 0px !important;
  height: 40px;

  padding-left: 15px;
  border-bottom: 1px solid #cccccc;
  margin-bottom: 20px;
}

.add /deep/ .el-dialog__title {
  line-height: 40px;
  padding-left: 15px;
}
.add /deep/ .el-dialog {
  border: 1px solid #ccc;
}
.add /deep/ .el-dialog__footer {
  text-align: center;
}
.describe {
  line-height: 30px;
  height: 30px;
  color: #a4acac;
  font-size: 12px;
  padding-left: 45px;
}
.introduce-project-top {
  margin-top: 30px;
  font-size: 14px;
  margin-bottom: 10px;
}
.introduce-project-name {
  color: #8d8d8d;
  font-size: 14px;
  margin-right: 55px;
}
.introduce /deep/ .el-dialog__header {
  margin-bottom: 0px;
  padding: 20px 10px;
  background-color: #f4f5f9;
}
.introduce /deep/ .el-dialog__header span {
  font-size: 14px;
}
.introduce /deep/ .el-dialog__body {
  padding: 0px 20px;
}
.Tree-title{
      height: 35px;
    line-height: 35px;
    background-color: #f4f5f9;
    padding-left: 10px;
    border: 1px solid #f4f5f9;
}
.Tree-title span{
   margin: 0px 8px;
}
.Tree-title-s{
  margin: 0px 0px !important;
}
.introduce-project-Tree{
  height: 420px;
}

</style>