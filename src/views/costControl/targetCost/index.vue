<template>
  <div class="targetCost">
    <div class="targetCost-select">
      项目<el-select v-model="value" placeholder="请选择" size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="feasibility-study">
      <div class="feasibility-study-top">
        <div class="feasibility-study-top-title">可研版(未审核)</div>
        <div
          :class="
            feasibilityStudy
              ? 'feasibility-study-top-operation'
              : 'feasibility-study-top-operation1'
          "
        >
          <el-button
            v-show="feasibilityStudy"
            size="mini"
            @click="tianIsHsow = true"
            type="success"
            >按分期新增</el-button
          >
          <el-button v-show="!feasibilityStudy" size="mini" type="success"
            >发起审批</el-button
          >
          <el-button v-show="!feasibilityStudy" size="mini">编辑</el-button>
          <el-button v-show="!feasibilityStudy" size="mini">详情</el-button>

          <el-select
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
        </div>
      </div>
      <div class="feasibility-study-buttom">
        <div
          v-show="!feasibilityStudy"
          class="feasibility-study-buttom-content"
        >
          <span style="float: left"
            >目标成本(万元):<span style="font-weight: 700">{{
              feasibilityStudyGoldCoins
            }}</span></span
          >
          <span style="float: right">单方:元/平米</span>
        </div>
        <div
          v-show="feasibilityStudy"
          class="feasibility-study-buttom-content-w"
        >
          <span>暂末编辑目标成本，请编制</span>
        </div>
      </div>
    </div>
    <div class="feasibility-study">
      <div class="feasibility-study-top">
        <div class="feasibility-study-top-title">可研版(未审核)</div>
        <div
          :class="
            programme
              ? 'feasibility-study-top-operation'
              : 'feasibility-study-top-operation1'
          "
        >
          <el-button v-show="programme" size="mini" type="success"
            >按分期新增</el-button
          >
          <el-button v-show="!programme" size="mini" type="success"
            >发起审批</el-button
          >
          <el-button v-show="!programme" size="mini">编辑</el-button>
          <el-button v-show="!programme" size="mini">详情</el-button>

          <el-select
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
        </div>
      </div>
      <div class="feasibility-study-buttom">
        <div v-show="!programme" class="feasibility-study-buttom-content">
          <span style="float: left"
            >目标成本(万元):<span style="font-weight: 700">0.7</span></span
          >
          <span style="float: right">单方:元/平米</span>
        </div>
        <div v-show="programme" class="feasibility-study-buttom-content-w">
          <span>暂末编辑目标成本，请编制</span>
        </div>
      </div>
    </div>
    <div class="feasibility-study">
      <div class="feasibility-study-top">
        <div class="feasibility-study-top-title">可研版(未审核)</div>
        <div
          :class="
            adjustment
              ? 'feasibility-study-top-operation'
              : 'feasibility-study-top-operation1'
          "
        >
          <el-button v-show="adjustment" size="mini" type="success"
            >按分期新增</el-button
          >
          <el-button v-show="!adjustment" size="mini" type="success"
            >发起审批</el-button
          >
          <el-button v-show="!adjustment" size="mini">编辑</el-button>
          <el-button v-show="!adjustment" size="mini">详情</el-button>

          <el-select
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
        </div>
      </div>
      <div class="feasibility-study-buttom">
        <div v-show="!adjustment" class="feasibility-study-buttom-content">
          <span style="float: left"
            >目标成本(万元):<span style="font-weight: 700">0.7</span></span
          >
          <span style="float: right">单方:元/平米</span>
        </div>
        <div v-show="adjustment" class="feasibility-study-buttom-content-w">
          <span>暂末编辑目标成本，请编制</span>
        </div>
      </div>
    </div>
    <el-dialog
      title="编辑项目成本"
      :visible.sync="tianIsHsow"
      top="0px"
      class="targetCost-dialog"
      :show-close="false"
      width="86%"
      center
      :before-close="handleClose"
    >
      <div>
        <el-tabs
          v-model="activeName"
          class="targetCost-tabs"
          @tab-click="handleClick"
        >
          <el-tab-pane label="目标成本" name="first">
            <div class="cost-top">
              <div class="cost-top-left">
                <span>项目/版本</span>
                <span>成本测试项目-成本测试一期(方案版)</span>
              </div>
              <div class="cost-top-rigth">
                <span>价税分离</span>
                <el-radio v-model="radio" label="false">不含税</el-radio>
                <el-radio v-model="radio" label="true">含税</el-radio>
              </div>
            </div>
            <div class="cost-button">
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
                        <el-table-column prop="Covered" width="240">
                        </el-table-column>
                        <el-table-column
                          prop="targetCostTaxIncluded"
                          width="140"
                        >
                        </el-table-column>
                        <el-table-column
                          prop="ComprehensiveTaxRate"
                          width="140"
                        >
                        </el-table-column>
                        <el-table-column
                          prop="targetCostTaxExcluded"
                          width="140"
                        >
                        </el-table-column>
                        <el-table-column prop="TaxAmount" width="170">
                        </el-table-column>
                        <el-table-column prop="remarks"> </el-table-column>
                      </el-table>
                    </el-table-column>

                    <el-table-column prop="name" width="240"> </el-table-column>
                    <el-table-column prop="Covered" width="240">
                    </el-table-column>
                    <el-table-column prop="targetCostTaxIncluded" width="140">
                    </el-table-column>
                    <el-table-column prop="ComprehensiveTaxRate" width="140">
                    </el-table-column>
                    <el-table-column prop="targetCostTaxExcluded" width="140">
                    </el-table-column>
                    <el-table-column prop="TaxAmount" width="170">
                    </el-table-column>
                    <el-table-column prop="remarks"> </el-table-column>
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
                <el-table-column label="科目名称" prop="Covered" width="240">
                </el-table-column>
                <el-table-column
                  label="目标成本 （含税）"
                  prop="targetCostTaxIncluded"
                  width="140"
                >
                </el-table-column>
                <el-table-column
                  label="综合税率（%）"
                  prop="ComprehensiveTaxRate"
                  width="140"
                >
                </el-table-column>
                <el-table-column
                  label="目标成本 （不含税）"
                  prop="targetCostTaxExcluded"
                  width="140"
                >
                </el-table-column>
                <el-table-column label="进项税额" prop="TaxAmount" width="170">
                </el-table-column>
                <el-table-column label="备注" prop="remarks"> </el-table-column>

                <el-table-column align="left" width="20">
                  <template slot="header" slot-scope="scope">
                    <div class="refresh">
                      <i class="el-icon-refresh"></i>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="产品分摊" name="second"> </el-tab-pane>
          <el-tab-pane label="共建分摊" name="third">
            <div class="cost-top">
              <div class="cost-top-left">
                <span>项目/版本</span>
                <span>宁波-一期(可研版)</span>
              </div>
              <div class="cost-top-rigth">
                <span>价税分离</span>
                <el-radio v-model="radio" label="false">不含税</el-radio>
                <el-radio v-model="radio" label="true">含税</el-radio>
              </div>
            </div>
            <div class="cost-button">
              <div class="cost-button-left">
                <div class="cost-button-left-title">基本信息（含税）</div>
                <div class="cost-button-left-button">
                  <div class="circleBox">
                    <el-progress
                      type="circle"
                      :percentage="0"
                      :show-text="false"
                    ></el-progress>
                    <div class="circleCenter">
                      <div style="text-align: center">
                        已分摊比例<br />
                        0.00%
                      </div>
                    </div>
                  </div>
                  <div class="Community">
                    <ul>
                      <li>社区配套</li>
                      <li>建筑成本: <span style="  margin-left: 15px;">0.00</span></li>
                      <li>已分摊金额: <span>0.00</span></li>
                      <li>末分摊金额: <span>0.00</span></li>
                      <li>按建筑面积分摊</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="cost-button-rigth">
         <el-table border :data="jointlySponsorData"    style="width: 100% height: 36px;">
           
                 
               
                <el-table-column label="产品" prop="product" >
                </el-table-column>
                <el-table-column
                  label="科目"
                  prop="subject"
                >
                </el-table-column>
                <el-table-column
                  label="金额（含税）"
                  prop="Amount "
                  width="150"
                >
                </el-table-column>
                <el-table-column
                  label="比例"
                  prop="proportion"
                  width="70"
                >
                </el-table-column>
              <el-table-column label="操作" align="right"   width="80">
            <template slot-scope="scope">
              <div class="operation">
                <span >删除</span>
                <span>详情</span>
              </div>
            </template>
          </el-table-column>

              
              </el-table>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button style="width: 110px" @click="tianIsHsow = false"
          >关闭</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "false",
      activeName: "first",
      feasibilityStudy: true,
      programme: true,
      adjustment: true,
      feasibilityStudyGoldCoins: 0.9,
      tianIsHsow: false,
      tbleDataSelect: [1, 2, 3, 4],

      ImportAccountData: [
        {
          name: 1,
          Covered: 1,
          targetCostTaxIncluded: 1,

          ComprehensiveTaxRate: 1,
          targetCostTaxExcluded: 1,
          TaxAmount: 1,
          remarks: 1,
        },
      ],
      jointlySponsorData:[
        {
product:1,
subject:1,
Amount:1,
proportion:1,
        }
      ],
      options: [
        {
          value: "1",
          label: "测试项目-二期",
        },
        {
          value: "2",
          label: "测试项目-三期",
        },
      ],
      value: "1",
      moreoptions: [
        {
          value: "q",
          label: "更多操作",
        },
        {
          value: "w",
          label: "更多操作",
        },
        {
          value: "e",
          label: "更多操作",
        },
      ],
      moreovalue: "q",
    };
  },
  methods: {
    handleClose() {},
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style scoped>
.targetCost {
  width: 83.5%;
  height: 650px;
  margin: 10px;
  float: left;
  background-color: #fff;
  padding: 0px 13px;
}

.targetCost-select {
  margin: 20px;
}
.targetCost-select /deep/ .el-input__inner {
  border-radius: 0px;
}
.table-select {
  width: 100px;
}
.table-select /deep/ .el-input__inner {
  border-radius: 0px;
}
.feasibility-study {
  border: 1px solid #eaeaea;
  margin-bottom: 15px;
}
.feasibility-study-top-operation {
  width: 250px;
  float: right;
}
.feasibility-study-top-operation1 {
  width: 400px;
  float: right;
}
.feasibility-study-top-operation button {
  margin: 0px 10px;
}
.feasibility-study-top {
  height: 36px;
  line-height: 36px;
  background-color: #f4f5f9;
  border-bottom: 1px solid #e9e9eb;
}
.feasibility-study-top-title {
  display: inline-block;
  padding: 0px 30px;
}
.feasibility-study-buttom-content {
  height: 40px;
  line-height: 40px;
  padding: 0px 30px;
}
.feasibility-study-buttom-content span {
}
.feasibility-study-buttom-content-w {
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.feasibility-study-buttom-content-w span {
}
.targetCost-dialog /deep/ .el-dialog {
  margin-left: 200px;
}
.targetCost-dialog /deep/ .el-dialog__header {
  margin-bottom: 30px;
  padding: 10px 10px;
  background-color: #f4f5f9;
}
.targetCost-dialog /deep/ .el-dialog__header span {
  font-size: 14px;
}
.targetCost-dialog /deep/ .el-dialog__body {
  padding: 0px 20px;
}
.targetCost-dialog /deep/ .el-dialog__header {
  text-align: initial;
}
.targetCost-dialog /deep/ .el-dialog__footer {
  background-color: #f4f5f9;
  padding: 30px 20px 5px 20px;
}
.targetCost-tabs /deep/ .el-tabs__item.is-active {
  color: #303133;
}
.cost-top-left span:nth-child(1) {
  color: #666666;
  margin-right: 55px;
}
.cost-top-left span:nth-child(2) {
  color: #222222;
}
.cost-top-left {
  float: left;
  margin-right: 370px;
}
.cost-top-rigth span {
  margin-right: 30px;
}
.cost-top-rigth /deep/ .el-radio__input.is-checked .el-radio__inner {
  border-color: #767575;
  background: #767575;
}
.cost-top-rigth /deep/ .el-radio__input.is-checked + .el-radio__label {
  color: #606266;
}
.cost-top {
  margin: 30px 0px 20px 0px;
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

.cost-button /deep/ th {
  background-color: #f4f5f9;
}
.cost-button {
  height: 500px;
}
.cost-button /deep/ .el-table__cell {
  padding: 0px 0px !important;
}
.cost-button /deep/.el-table--border .el-table__cell,
.el-table__body-wrapper .el-table--border.is-scrolling-left ~ .el-table__fixed {
  border-right: none;
}
.activeCss {
  width: 20px;
  text-align: center;
  border-radius: 50%;
  background-color: #44b549;
  color: #fff;
}
.refresh i {
  margin-left: -6px;
  font-weight: 700;
  cursor: pointer;
}
.targetCost /deep/ .el-dialog__footer {
  background-color: #fff;
}
.cost-button-left {
  width: 380px;
  
  border: 1px solid #e7e7eb;
      float: left;
}
.cost-button-left-title {
  height: 35px;
  line-height: 35px;
  padding-left: 10px;
      background-color: #f4f5f9;
}
.circleBox {
  position: relative;
  text-align: center;
  width: 150px;
      float: left;
          margin-top: 10px;
}

.circleCenter {
  position: absolute;
  top: 50px;
  left: 40px;
}
.Community ul li {
  font-size: 14px;
  color: #666666;
  margin:  11px 0px;
}
.Community  ul li:nth-child(1){
  font-size: 16px;
  color: #222222;
  margin-top: 0px;

}
.cost-button-rigth{
      width: 884px;
    float: right;
    height: 188px;
    border-bottom: 1px solid #e7e7eb;
}
.operation {
  color: #6d9aec;
}
.operation span {
  margin: 0 3px;
}
.cost-button-rigth /deep/  .el-table--border th.el-table__cell, .el-table__fixed-right-patch {
  border-left: 1px solid #EBEEF5;
}
.cost-button-rigth /deep/ tr th {
  height: 34px;
  line-height: 34px;
}
</style>