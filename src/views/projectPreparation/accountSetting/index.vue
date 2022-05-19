<template>
  <div class="accountSetting">
    <div class="accountSetting-select">
      项目：<el-select v-model="value" placeholder="请选择" size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="accountSetting-table">
      <div class="accountSetting-table-top">
        <el-button
          class="accountSetting-table-add"
          type="success"
          size="mini"
          @click="dialogVisible = true"
          >引入科目</el-button
        >
        <el-button class="accountSetting-table-add" size="mini"
          >导出Excel</el-button
        >
      </div>
    </div>
    <div class="accountSetting-table-buttom">
      <el-table border :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <el-table :show-header="false" :data="tablelist" style="width: 100%">
            <el-table-column width="48"> </el-table-column>

            <el-talhble-column prop="name" width="240"> </el-talhble-column>
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
        <el-table-column align="left" prop="name" width="174">
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
        <el-table-column label="科目名称" prop="AccountName" width="140">
        </el-table-column>
        <el-table-column label="科目大类" prop="SubjectCategory" width="140">
        </el-table-column>
        <el-table-column label="企业管理科目" prop="floorage" width="140">
        </el-table-column>
        <el-table-column
          label="成本管理科目"
          prop="CostManagementAccount"
          width="140"
        >
        </el-table-column>
        <el-table-column
          label="按业态管理"
          prop="ManagementByBusinessType"
          width="140"
        >
        </el-table-column>
        <el-table-column label="科目类型" prop="AccountType" width="140">
        </el-table-column>
        <el-table-column label="分期" prop="byStages" width="140">
        </el-table-column>
        <el-table-column label="操作" align="right" width="50">
          <template slot-scope="scope">
            <div class="operation">
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
      title="引入项目"
      :visible.sync="dialogVisible"
      top="0px"
      class="accountSetting-dialog"
      :show-close="false"
      width="86%"
      center
      :before-close="handleClose"
    >
      <div class="ImportAccount">
        <div class="ImportAccount-left">
          <span>科目模板库名称</span>
          <ul>
            <!-- :class="{ activeCss: activeVar == index }" -->
            <li class="ImportAccountCss">集团标准科目</li>
          </ul>
        </div>

        <div class="ImportAccount-rigth">
          <div class="accountSetting-table-buttom">
            <el-table border :data="ImportAccountData" style="width: 100%">
              <el-table-column type="expand">
                <el-table
                  :show-header="false"
                  :data="ImportAccountData"
                  style="width: 100%"
                >
                  <el-table-column type="expand">
                    <el-table
                      :show-header="false"
                      :data="ImportAccountData"
                      style="width: 100%"
                    >
                      <el-table-column width="48"> </el-table-column>

                      <el-table-column prop="name" width="240">
                      </el-table-column>
                      <el-table-column prop="Covered"> </el-table-column>
                    </el-table>
                  </el-table-column>

                  <el-table-column prop="name" width="240"> </el-table-column>
                  <el-table-column prop="Covered"> </el-table-column>
                </el-table>
              </el-table-column>
              <el-table-column align="left" prop="name" width="240">
                <template slot="header" slot-scope="scope">
                  <div class="table-title">
                    <div class="table-title-s">编码</div>
                    <ul>
                      <li
                        v-for="(item, index) in tbleDataSelect"
                        :key="index"
                        :class="{ activeCss: ativeVar == index }"
                        @click="ativeVar = index"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="科目名称" prop="Covered">
              </el-table-column>
            </el-table>
          </div>
        </div>
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
      tableData: [],
      tablelist: [],
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
          label: "演示",
        },
      ],
      value: "1",
    };
  },
  methods: {
    handleClose() {



    },
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
</style>