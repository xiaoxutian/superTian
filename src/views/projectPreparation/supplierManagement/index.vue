<template>
  <div class="accountSetting">
    <div class="accountSetting-select">
      公司：<el-select v-model="value" placeholder="请选择" size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <div class="search">
        <el-input
          v-model="input"
          style="width: 200px; padding: 0px 20px"
          size="mini"
          placeholder="请输入内容"
        ></el-input>
        <el-button size="mini" type="success">搜索</el-button>
      </div>
    </div>
    <div class="accountSetting-table">
      <div class="accountSetting-table-top">
        <el-button
          class="accountSetting-table-add"
          type="success"
          size="mini"
          style="width: 100px"
          @click="dialogVisible = true"
        >
          新增
        </el-button>
      </div>
    </div>
    <div class="accountSetting-table-buttom">
      <el-table border :data="tableData" style="width: 100%">
        <el-table-column label="供应商公司" prop="name" width="240">
        </el-table-column>
        <el-table-column label="供应商编号" prop="code" width="240">
        </el-table-column>
        <el-table-column
          label="法定代表人"
          prop="legalRepresentative"
          width="140"
        >
        </el-table-column>
        <el-table-column label="是否是甲方" prop="isPartyA" width="140">
        </el-table-column>
        <el-table-column
          label="公司注册地址"
          prop="placeofRegistration"
          width="140"
        >
        </el-table-column>
        <el-table-column label="注册类型" prop="registrationType" width="140">
        </el-table-column>

        <el-table-column label="操作" align="right">
          <template slot-scope="scope">
            <div class="operation">
              <span>编辑</span>
              <span>删除</span>
              <span>详情</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column align="left" width="30">
          <template slot="header" slot-scope="scope">
            <div class="refresh">
              <i class="el-icon-refresh"></i>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="基本信息"
      :visible.sync="dialogVisible"
      top="0px"
      class="accountSetting-dialog"
      :show-close="false"
      width="86%"
      center
      :before-close="handleClose"
    >
      <div class="supplierManagement">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-col :span="12">
            <el-form-item label="项目编号" prop="itemNumber">
              <el-input
                style="width: 500px"
                size="mini"
                v-model="ruleForm.itemNumber"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-form-item label="是否甲方单位" prop="itemNumber">
            <el-radio v-model="ruleForm.radio" label="1">是</el-radio>
            <el-radio v-model="ruleForm.radio" label="2">否</el-radio>
          </el-form-item>
          <el-col :span="12">
          <el-form-item label="供应商编号" prop="itemNumber">
            <el-input
              style="width: 500px"
              size="mini"
              v-model="ruleForm.itemNumber"
            ></el-input>
          </el-form-item>
          </el-col>
          <el-form-item label="供应商简称" prop="itemNumber">
            <el-input
              style="width: 500px"
              size="mini"
              v-model="ruleForm.itemNumber"
            ></el-input>
          </el-form-item>
          <el-col :span="24">
          <el-form-item label="供应商类别" prop="itemNumber">
            <el-input
              style="width: 500px"
              size="mini"
              v-model="ruleForm.itemNumber"
            ></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="12">
          <el-form-item label="法定代表人" prop="itemNumber">
            <el-input
              style="width: 500px"
              size="mini"
              v-model="ruleForm.itemNumber"
            ></el-input>
          </el-form-item>
          </el-col>
          <el-form-item label="电话号码" prop="itemNumber">
            <el-input
              style="width: 500px"
              size="mini"
              v-model="ruleForm.itemNumber"
            ></el-input>
          </el-form-item>
           <el-col :span="24">
          <el-form-item label="公司注册地" prop="itemNumber">
            <el-input
              style="width: 1100px"
              size="mini"
              v-model="ruleForm.itemNumber"
            ></el-input>
          </el-form-item>
          </el-col>
           <el-col :span="12">
          <el-form-item label="传真号码" prop="itemNumber">
            <el-input
              style="width: 500px"
              size="mini"
              v-model="ruleForm.itemNumber"
            ></el-input>
          </el-form-item>
          </el-col>
           <el-col :span="12">
          <el-form-item label="邮箱编码" prop="itemNumber">
            <el-input
              style="width: 500px"
              size="mini"
              v-model="ruleForm.itemNumber"
            ></el-input>
          </el-form-item>
           </el-col>
           <el-col :span="12">
          <el-form-item label="纳税人资格" prop="itemNumber">
            <el-input
              style="width: 500px"
              size="mini"
              v-model="ruleForm.itemNumber"
            ></el-input>
          </el-form-item>
            </el-col>
          <el-form-item label="纳税人识别号" prop="itemNumber">
            <el-input
              style="width: 500px"
              size="mini"
              v-model="ruleForm.itemNumber"
            ></el-input>
          </el-form-item>
        
         
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button
          type="success"
          style="width: 110px"
          @click="dialogVisible = false"
          >确 定</el-button
        >
        <el-button style="width: 110px" @click="dialogVisible = false"
          >取 消</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      tableDataSelect: [1, 2],
      tbleDataSelect: [1, 2, 3, 4, 5],
      tableData: [
        {
          name: "1",
          code: "1",
          legalRepresentative: "1",
          isPartyA: "1",
          placeofRegistration: "",
          registrationType: "1",
        },
      ],
      ruleForm: {
        radio: "1",
      },
      tableDataSelect: [],
      ImportAccountData: [
        {
          name: 1,
          Covered: 1,
        },
      ],
      ativeVar: 2,
      options: [
        {
          value: "1",
          label: "测试公司",
        },
      ],
      value: "1",
    };
  },
  methods: {
    handleClose() {},
  },
};
</script>
<style scoped>
.accountSetting {
  width: 85.5%;
  height: 90%;
  margin: 10px;
  float: left;
  background-color: #fff;
}
.accountSetting-select {
  margin: 20px;
}
.accountSetting-select /deep/ .el-input__inner {
  border-radius: 0px;
}
.accountSetting-table {
  background-color: #fff;
  margin-top: 10px;
}
.accountSetting-table-top {
  float: right;
  margin: 5px 40px;
}

.accountSetting-table-buttom /deep/ th {
  background-color: #f4f5f9;
}
.accountSetting-table-buttom {
  margin: 0px 15px;
  background-color: #f4f5f9;
}
.accountSetting-table-buttom /deep/ .el-table__cell {
  padding: 0px 0px !important;
}
.accountSetting-table-buttom /deep/.el-table--border .el-table__cell,
.el-table__body-wrapper .el-table--border.is-scrolling-left ~ .el-table__fixed {
  border-right: none;
}
.operation {
  color: #6d9aec;
}
.operation span {
  margin: 0 5px;
  cursor: pointer;
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
.accountSetting-dialog /deep/ .el-dialog {
  margin-left: 200px;
}
.accountSetting-dialog /deep/ .el-dialog__header {
  margin-bottom: 30px;
  padding: 20px 10px;
  background-color: #f4f5f9;
}
.accountSetting-dialog /deep/ .el-dialog__header span {
  font-size: 14px;
}
.accountSetting-dialog /deep/ .el-dialog__body {
  padding: 0px 20px;
}
.accountSetting-dialog /deep/ .el-dialog__header {
  text-align: initial;
}
.accountSetting-dialog /deep/ .el-dialog__footer {
  background-color: #f4f5f9;
  padding: 30px 20px 5px 20px;
}
.ImportAccount {
  width: 100%;
  height: 540px;
}

.ImportAccount-left {
  width: 30%;
  margin: right 5px;
  border: 1px solid #e5e5e5;
  height: 540px;
  float: left;
}
.ImportAccount-left span {
  height: 30px;
  line-height: 30px;
  padding-left: 10px;
  font-size: 14px;
  border-bottom: 1px solid #e5e5e5;
  display: block;
  background-color: #f4f5f9;
}
.ImportAccount-left ul li {
  height: 30px;
  line-height: 30px;
  padding-left: 10px;
  font-size: 14px;
  border-bottom: 1px solid #e5e5e5;
  display: block;
}
.ImportAccountCss {
  background-color: #e0eaf7;
}
.ImportAccount-rigth {
  width: 69%;
  float: right;
}
.search {
  width: 400px;
  display: contents;
}
.demo-ruleForm .el-form-item{
    margin-bottom: 10px;
}
</style>