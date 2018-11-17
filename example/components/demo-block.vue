<template>
  <div class="demo-block">
    <div class="demo-block-source">
      <slot name="source"></slot>
      <span class="demo-block-code-icon"
        v-if="!$slots.default"
        @click="showCode=!showCode"><img alt="expand code"
          src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"
          class="code-expand-icon-show"></span>
    </div>
    <div class="demo-block-detail">
        <div ref="detailWarpper" :class="{
          open: showCode
        }" :style="{
          height: showCode ? `${codeBlockHeight}px` : 0
        }">
          <div class="demo-block-meta"
            v-if="$slots.default">
            <slot></slot>
          </div>
          <div class="demo-block-code">
            <slot name="highlight"></slot>
          </div>
        </div>
    </div>
    <div v-if="$slots.default"
      class="demo-block-control"
      @click="showCode=!showCode">
      <div>
        <i class="iconfont" :class="{
          'icon-triangle-bottom': !showCode,
          'icon-triangle-top': showCode
          }"></i>
        <span style="font-size: 14px;">
          {{showCode? '收起代码': '展开代码'}}
        </span>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
export default {
  name: "demo-block",
  data() {
    return {
      showCode: false
    };
  },
  computed: {
    codeBlockHeight() {
      return this.calcCodeBlockHeight()
    }
  },
  mounted() {
    this.calcCodeBlockHeight();
  },
  methods: {
    // 计算代码块展开的高度
    calcCodeBlockHeight() {
      let countHeight = 0
      Array.from(this.$refs.detailWarpper.children).forEach(el => {
        countHeight += el.offsetHeight;
      });
      return countHeight;
    }
  }
};
</script>
<style lang="scss" scoped>
.demo-block {
  box-sizing: border-box;
  border: 1px solid #ebedf0;
  border-radius: 2px;
  display: inline-block;
  width: 100%;
  position: relative;
  margin: 0 0 16px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  border-radius: 2px;
  &-detail {
    overflow: hidden;
    > div {
      transition: height 0.3s;
    }
  }
}
.demo-block p {
  padding: 0;
  margin: 0;
}
.demo-block-control {
  height: 44px;
  line-height: 44px;
  color: rgb(211, 220, 230);
  text-align: center;
  cursor: pointer;
  > div {
    transition: all 0.2s ease-in;
    transform: translateX(80px);
    span {
      transition: all 0.2s ease-in;
      opacity: 0;
    }
    &:hover {
      transform: translateX(0);
      span {
        color: rgb(64, 158, 255);
        opacity: 1;
      }
    }
  }
}
.demo-block .demo-block-code-icon {
  position: absolute;
  right: 16px;
  bottom: 14px;
  cursor: pointer;
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
}
.demo-block .demo-block-code-icon img {
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  max-width: 100%;
  width: 100%;
  vertical-align: baseline;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.demo-block .demo-block-source {
  border-bottom: 1px solid #ebedf0;
  padding: 20px 24px 20px;
  color: #444;
  position: relative;
  margin-bottom: -1px;
}
.demo-block .demo-block-meta {
  position: relative;
  padding: 12px 50px 12px 20px;
  border-radius: 0 0 2px 2px;
  -webkit-transition: background-color 0.4s;
  transition: background-color 0.4s;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 14px;
  color: #444;
  font-size: 14px;
  line-height: 2;
  border-radius: 0;
  border-bottom: 1px dashed #ebedf0;
  margin-bottom: -1px;
}
.demo-block .demo-block-meta code {
  color: #444;
  background-color: #e6effb;
  margin: 0 4px;
  display: inline-block;
  padding: 3px 7px;
  border-radius: 3px;
  height: 18px;
  line-height: 18px;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
  font-size: 14px;
}
.demo-block .demo-block-code {
  background-color: #f7f7f7;
  font-size: 0;
}
.demo-block .demo-block-code code {
  background-color: #f7f7f7;
  font-family: Consolas, Menlo, Courier, monospace;
  border: none;
  display: block;
  font-size: 14px;
  padding: 16px 32px;
}
.demo-block .demo-block-code pre {
  margin: 0;
  padding: 0;
}
.sh-checkbox {
  color: #444;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
}
.highlight {
  line-height: 20px;
}
</style>