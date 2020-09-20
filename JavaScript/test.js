class Dbgsadd extends Component {

    state = {
        //公共参数
        jzwc: false,
        sfxr: false,  // 控制界面刷新的属性
        showbt: true,  // 是否展示标题
        khyhmd1: false, // 控制银行modole是否显示
        khyhmd2: false, // 控制银行modole是否显示
        xydmzh: '',
        zcd: '',
        fddbrxm: '',
        frzjhm: '',
        Data: '',
        lrgljg: '',
        gljg: '',
        gljgmc: '',
        gljgdata: [],
        gzData: [],
        bpmid: '',
        ywlsh: '',
        khjgbm: '', // 开户机构名称(旧)
        khjgv: '', // 开户机构编码（旧）
        khjgmc: '',
        // 基本信息
        tixi: '',
        hzdwmc: '',
        dwdz: '',
        zczb: '',
        jyfw: '',
        zzdj: '',
        zzzsbh: '',
        xydj: '',
        tyshxydm: ' ', // 统一社会信用代码
        sfgbwt: '',
        dwbh: '',
        // 法人信息
        dwfrdbzjlx: '', // 单位法人代表证件类型
        dwfrdbxm: '',   // 单位法人姓名
        dwfrdbzjhm: '', // 证件号码
        // 经办人信息
        jbrxm: '',
        jbrsjhm: '',
        jbrgddhhm: '',
        jbrzjlx: '01',
        jbrzjhm: '',
        // 账户信息
        bzjzhkhyh: '',
        bzjzhyhzh: '',
        bzjzhyhhm: '',
        dczhkhyh: '',
        dczhyhzh: '',
        dczhyhhm: '',
        // 日期字段
        zzksrq: '',
        zzksrqdate: new Date(),
        zzjsrq: '',
        zzjsrqdate: new Date(),
        yyksrq: '',
        yyksrqdate: new Date(),
        yyjsrq: '',
        yyjsrqdate: new Date(),
        zzzshzrq: '',
        zzzshzrqdate: new Date(),
        frzjyxqks: '',
        frzjyxqksdate: new Date(),
        frzjyxqjs: '',
        frzjyxqjsdate: new Date(),
        // 营业期限有效期日期
        yyqxksrq: '',
        yyqxksrqdate: new Date(),
        yyqxjsrq: '',
        yyqxjsrqdate: new Date(),
        // 获证日期
        hzrq: '',
        hzrqdate: new Date(),
        // 资质证书有效期
        zzzsyxqksrq: '',
        zzzsyxqksrqdate: new Date(),
        zzzsyxqjsrq: '',
        zzzsyxqjsrqdate: new Date(),
        dwxyyxqksrq: '',
        dwxyyxqksrqdate: new Date(),
        dwxyyxqjsrq: '',
        dwxyyxqjsrqdate: new Date(),
        wtxyyxqksrq: '',
        wtxyyxqksrqdate: new Date(),
        wtxyyxqjsrq: '',
        wtxyyxqjsrqdate: new Date(),
        dwfrdbzjyxqksrq: '',
        dwfrdbzjyxqksrqdate: new Date(),
        dwfrdbzjyxqjsrq: '',
        dwfrdbzjyxqjsrqdate: new Date(),
        srjglx: '01',  // 增加页面选择的机构类型
        bzjzhxxshow: false,
        dczhxxshow: false,
        zhxxtitleshow: false,  // 账户信息栏的隐藏状态
        showMore1: true, // 体系字段的隐藏状态
        showMore2: true, // 是否网厅 网厅协议有效期的的隐藏状态
        showMoredwxxyxq: false,
        modalShow: true,
        type: 'text',
        // 归集单位信息
        gjdwbh: ' ',
        gjdwmc: ' ',
        gjdwdz: ' ',
        gjdwslrq: ' ',
        gjdwfrdbxm: ' ',
        gjdwfrdbzjhm: ' ',
        gjjgbm: ' ',
        loading: false,
        //
        skyhmc1: '',
        skyhbm1: '',
        skyhbm2: '',
        skyhmc2: '',
        gjdwxxstate: false,
        dwfzzjlxisgjdwxxstate: '',

    }


    // 组件加载完后初始化数据
    async componentDidMount() {
        Toast.loading('数据加载中...', 0)

    }

    /**
     * 归集单位查询
     *  1 存在反显
     *  2 不存在维持原来的数据
     */
    dkhzdwxxcx = async () => {
        const { getFieldValue, setFieldsValue } = this.props.form
        console.log('==111===', getFieldValue('tyshxydm'))
        await this.setState({
            tyshxydm: getFieldValue('tyshxydm'),
        })
        console.log('==222===', this.state.tyshxydm)
        /**
         * 统一社会信用代码必输校验
         */
        if (!getFieldValue('tyshxydm')) {
            Toast.fail('请输入统一社会信用代码', 3)
            return
        } else if (getFieldValue('tyshxydm').length > 18) {
            Toast.fail('社会统一信用代码长度不能大于18位', 3)
            return
        }
        Toast.loading('数据加载中...', 0)
        /**
         * 走归集查询
         */
        await dbgslrStore.getgjdwcxxx({
            tyshxydm: getFieldValue('tyshxydm')
        })

        console.log('ffffffffffffffffffff', dbgslrStore.gjdwcxxx)
        /**
         * 处理归集查询结果
         */
        if (dbgslrStore.gjdwcxxx) { // 如果归集单位存在
            this.rule.getRule({
                ywfl: '05',
                ywlb: '68',
                objectservice: 'gjjzx',
                sfzsf: 1,
                lcfx: 1,
                taskDefinitionName: '发起人',
                czlx: 'add',
            })
            const { setFieldsValue } = this.props.form
            /**
             * 如果是归集单位要反显的信息
             * 1 单位客户号
             * 2 单位名称
             * 3 单位地址
             * 4 获证日期
             * 5 单位法人代表姓名
             * 6 单位法人代表证件号码
             * 7 单位法人代表证件类型
             * 8 单位法人代表证件有效期
             */
            setFieldsValue({
                dwkhh: dbgslrStore.gjdwcxxx.dwbh,
                hzdwmc: dbgslrStore.gjdwcxxx.dwmc,
                dwdz: dbgslrStore.gjdwcxxx.dwdz,
                hzrq: dbgslrStore.gjdwcxxx.hzrq,
                khjg: dbgslrStore.gjdwcxxx.jgbm,
                dwfrdbxm: dbgslrStore.gjdwcxxx.dwfrdbxm,
                dwfrdbzjhm: dbgslrStore.gjdwcxxx.dwfrdbzjhm,
                dwfrdbzjlx: dbgslrStore.gjdwcxxx.dwfrdbzjlx,
                // dwfrdbjzjyxqks:
                // dwfrdbzjyxqjs:
            })

            this.setState({
                // 对应关系：前面为归集中字段，后面为合作单位信息
                // dwbh - dwbh、 dwmc - dwmc 、dwdz - dwdz 、dwslrq - hzrq 、,dwfrdbxm --dwfrdbxm  ,dwfrdbzjhm --dwfrdbzjhm 、jgbm - khjg
                dwbh: dbgslrStore.gjdwcxxx.dwbh,
                hzdwmc: dbgslrStore.gjdwcxxx.dwmc,
                dwdz: dbgslrStore.gjdwcxxx.dwdz,
                dwfrdbxm: dbgslrStore.gjdwcxxx.dwfrdbxm,
                dwfrdbzjhm: dbgslrStore.gjdwcxxx.dwfrdbzjhm,
                dwfrdbzjlx: dbgslrStore.gjdwcxxx.dwfrdbzjlx,
                khjg: dbgslrStore.gjdwcxxx.jgbm,
                hzrq: dbgslrStore.gjdwcxxx.hzrq && dbgslrStore.gjdwcxxx.hzrq !== ' ' ? moment(dbgslrStore.gjdwcxxx.hzrq).format('YYYY-MM-DD') : '请选择',
                hzrqdate: dbgslrStore.gjdwcxxx.hzrq && dbgslrStore.gjdwcxxx.hzrq !== ' ' ? new Date(dbgslrStore.gjdwcxxx.hzrq) : new Date(),
                dwfrdbzjyxqksrq: dbgslrStore.gjdwcxxx.frzjyxqks && dbgslrStore.gjdwcxxx.frzjyxqks !== ' ' ? moment(dbgslrStore.gjdwcxxx.frzjyxqks).format('YYYY-MM-DD') : '请选择',
                dwfrdbzjyxqksrqdate: dbgslrStore.gjdwcxxx.frzjyxqks && dbgslrStore.gjdwcxxx.frzjyxqks !== ' ' ? new Date(dbgslrStore.gjdwcxxx.frzjyxqks) : new Date(),
                dwfrdbzjyxqjsrq: dbgslrStore.gjdwcxxx.frzjyxqjs && dbgslrStore.gjdwcxxx.frzjyxqjs !== ' ' ? moment(dbgslrStore.gjdwcxxx.frzjyxqjs).format('YYYY-MM-DD') : '请选择',
                dwfrdbzjyxqjsrqdate: dbgslrStore.gjdwcxxx.frzjyxqjs && dbgslrStore.gjdwcxxx.frzjyxqjs !== ' ' ? new Date(dbgslrStore.gjdwcxxx.frzjyxqjs) : new Date(),
                gjdwxxstate: true,
                dwfzzjlxisgjdwxxstate: 'all',
            })
            console.log(this.state.tyshxydm)
            Toast.hide()
        } else { // 如果不存在
            setFieldsValue({
                tyshxydm: this.state.tyshxydm,
                khjg: gjjgrxx.khjgbm,
                dwkhh: ''
            })
            this.setState({ gjdwxxstate: false, dwfzzjlxisgjdwxxstate: '' })
            // 统一社会信用代码不变 其他的 字段 手动输入
            Toast.fail('非归集单位', 1)
        }
    }



    /**
     * 选择 机构类型 的点击事件选择 机构类型  
     * 将选择的 value 值 存储到 state 中
     */
    onChangeGljgGetSelet = (val) => {
        console.log('------------------------', val[0])
        const srjglx = val[0]
        console.log('-------看看类型-----', typeof (srjglx))
        console.log('-------选择的机构类型------------', srjglx)
        this.setState({
            srjglx: srjglx === undefined ? '' : srjglx,
            zhxxtitleshow: false,  // 账户信息栏的隐藏状态
            showMore1: true, // 体系字段的隐藏状态 
            showMore2: true, // 是否网厅 网厅协议有效期的的隐藏状态

        })
        if (this.state.srjglx === '01') { // 选择不同机构类型 控制表单字段的显隐
            this.setState({ zhxxtitleshow: false, showMore1: true, showMore2: true, showMoredwxxyxq: false })
        } else if (this.state.srjglx === '02') {
            this.setState({ zhxxtitleshow: false, showMore1: false, showMore2: true, showMoredwxxyxq: false })
        } else if (this.state.srjglx === '03') {
            this.setState({ zhxxtitleshow: true, showMore1: false, showMore2: false, showMoredwxxyxq: true })
        } else {
            this.setState({ zhxxtitleshow: false, showMore1: true, showMore2: true, showMoredwxxyxq: false })
        }
    }
    handlehzrqshow = () => {
        if (!this.state.gjdwxxstate) {
            this.hzrq.show()
        }
    }

    // 把SyDate组件中选中的日期存入state
    changeDate = (type, date) => {
        let dateStr = moment(date).format('YYYY-MM-DD')
        this.setState({
            [type]: dateStr,
            [type + 'date']: date
        })
    }

    // 自定义校验器
    validatelrxx = (rule, value, callback) => {
        const { getFieldValue } = this.props.form
        // 校验成功的回调
        const backval = (val) => {
            if (val.success) {
                callback()
            } else {
                callback(val.msg)
            }
        }
        // 校验失败的回调
        const backerr = (err) => {
            console.log(err)
            callback('校验失败')
        }
        // 银行卡校验 dczhyhzh
        // if (rule.fullField === 'bzjzhyhzh' || rule.fullField === 'dczhyhzh') {
        //   InputValueCheck(value, 'BankNum', '只能输入10-19位以内字母和数字').then(backval, backerr)
        // } 
        // 银行卡账户名校验
        // if (rule.fullField === 'bzjzhmc' || rule.fullField === 'dczhmc') {
        //   InputValueCheck(value, 'RealName', '账户格式错误').then(backval, backerr)
        // }

        // 统一社会信用代码  必输  且 只能输入18位以内字母和数字
        if (rule.fullField === 'tyshxydm') {
            InputValueCheck(value, 'Tyshxydm', '只能输入18位以内字母和数字').then(backval, backerr)
        }
        // 注册资本  只能输入数字
        if (rule.fullField === 'zczb') {
            InputValueCheck(value, 'Money', '只能输入数字').then(backval, backerr)
        }
        // 座机电话格式
        // if (rule.fullField === 'jbrgddhhm') {
        //   InputValueCheck(value, 'Phone', '座机电话格式错误').then(backval, backerr)
        // }
        // 姓名的格式
        if (rule.fullField === 'dwfrdbxm' || rule.fullField === 'jbrxm') {
            InputValueCheck(value, 'RealName', '姓名格式错误').then(backval, backerr)
        }
        //  法人代表 身份证 校验
        if (rule.fullField === 'dwfrdbzjhm') {
            if (getFieldValue('dwfrdbzjlx') === '01') {
                InputValueCheck(value, 'IDCard', '身份证号码格式错误').then(backval, backerr)
            } else {
                callback()
            }
        }
        // 经办人 身份证号码 格式校验 
        if (rule.fullField === 'jbrzjhm') {
            if (getFieldValue('jbrzjlx') === '01') {
                InputValueCheck(value, 'IDCard', '身份证号码格式错误').then(backval, backerr)
            } else {
                callback()
            }
        }
        // 经办人 手机号 校验
        if (rule.fullField === 'dwfrdblxdh' || rule.fullField === 'jbrsjhm') {
            InputValueCheck(value, 'MobileAndPhone', '联系电话格式错误').then(backval, backerr)
        }
        // 日期校验  开始日期 不能晚于结束日期
    }
    // 获取 保证金 银行名称 和 编码的 方法
    handleKhyh1 = (val) => {
        console.log(val)
        if (val) {
            this.setState({
                skyhmc1: val.mc,
                skyhbm1: val.bm,
            })
        }
        console.log('---------skyhmc1--------------', this.state.skyhbm1)
        console.log('---------skyhbm1--------------', this.state.skyhbm1)
        this.setState({ khyhmd1: false })
    }
    // 获取 代偿 银行名称 和 编码的 方法
    handleKhyh2 = async (val) => {
        console.log(val)
        if (val) {
            await this.setState({
                skyhmc2: val.mc,
                skyhbm2: val.bm,
            })
        }
        console.log('---------skyhmc2--------------', this.state.skyhmc2)
        console.log('---------skyhbm2--------------', this.state.skyhbm2)
        this.setState({ khyhmd2: false })
    }

    // 提交审批
    onSaveClick = () => {
        this.props.form.validateFields(async (error, value) => {
            console.log('=========error===============', error)
            console.log('=========value=============', value)
            let fieldsValue = this.props.form.getFieldsValue()
            console.log('fieldsValue=====', fieldsValue)
            this.setState({
                dwfrdbzjlx: fieldsValue['dwfrdbzjlx'], // 存单位法人代表证件类型
                dwfrdbzjhm: fieldsValue['dwfrdbzjhm'], // 存单位法人代表证件号码
                jbrzjlx: fieldsValue['jbrzjlx'], // 存联系人证件类型
                jbrzjhm: fieldsValue['jbrzjhm'] // 存联系人证件号码
            })
            // 必传日期校验

            if (!this.state.dwxyyxqjsrq || this.state.showMoredwxyyxq) {
                Toast.fail('请输入单位协议有效期结束日期', 3)
                return
            }
            if (!this.state.dwxyyxqksrq || this.state.showMoredwxyyxq) {
                Toast.fail('请输入单位协议有效期开始日期', 3)
                return
            }
            if (!this.state.dwfrdbzjyxqjsrq) {
                Toast.fail('请输入法人证件有效期结束日期', 3)
                return
            }
            if (!this.state.dwfrdbzjyxqksrq) {
                Toast.fail('请输入法人证件有效期开始日期', 3)
                return
            }
            if (!this.state.zzzshzrq) {
                Toast.fail('请输入资质证书获证日期', 3)
                return
            }
            if (!this.state.zzzsyxqjsrq) {
                Toast.fail('请输入资质证书有效期结束日期', 3)
                return
            }
            if (!this.state.zzzsyxqksrq) {
                Toast.fail('请输入资质证书有效期开始日期', 3)
                return
            }
            if (!this.state.hzrq) {
                Toast.fail('请输入获证日期', 3)
                return
            }
            if (!this.state.yyqxjsrq) {
                Toast.fail('请输入营业期限结束日期', 3)
                return
            }
            if (!this.state.yyqxksrq) {
                Toast.fail('请输入营业期限开始日期', 3)
                return
            }
            if (!this.state.wtxyyxqksrq) {
                Toast.fail('请输入网厅协议有效期开始日期', 3)
                return
            }
            if (!this.state.wtxyyxqjsrq) {
                Toast.fail('请输入网厅协议有效期结束日期', 3)
                return
            }
            if (!this.state.zczb) {
                Toast.fail('请输入注册资本', 3)
                return
            }

            if (error != null) {
                // if (error.khjg != null) {
                //   //  开户机构
                //   Toast.fail(error.khjg.errors[0].message, 3)
                //   return
                // }
                if (error.tyshxydm != null) {
                    // 统一社会信用代码
                    Toast.fail(error.tyshxydm.errors[0].message, 3)
                    return
                }
                if (error.hzdwmc != null) {
                    // 单位名称
                    Toast.fail(error.hzdwmc.errors[0].message, 3)
                    return
                }
                if (error.dwdz != null) {
                    // 单位地址
                    Toast.fail(error.dwdz.errors[0].message, 3)
                    return
                }
                if (error.zczb != null) {
                    if (this.state.zczb) {
                        // 注册资本
                        Toast.fail(error.dwdz.errors[0].message, 3)
                        return
                    }
                }
                if (error.zzzsbh != null) {
                    // 资质证书编号
                    Toast.fail(error.zzzsbh.errors[0].message, 3)
                    return
                }
                if (error.dwfrdbxm != null) {
                    // 单位法人代表姓名
                    Toast.fail(error.dwfrdbxm.errors[0].message, 3)
                    return
                }
                if (error.dwfrdbzjlx != null) {
                    // 单位法人代表证件类型
                    Toast.fail(error.dwfrdbzjlx.errors[0].message, 3)
                    return
                }
                if (error.dwfrdbzjhm != null) {
                    if (this.state.dwfrdbzjlx !== undefined) {
                        // 法人代表身份证件号码
                        if (value.dwfrdbzjhm.length > 30) {
                            Toast.fail('单位法人代表证件号码最大30位！', 3)
                            return
                        } else if (this.state.dwfrdbzjlx === '01') {
                            Toast.fail(error.dwfrdbzjhm.errors[0].message, 3)
                            return
                        }
                    } else if (
                        error.dwfrdbzjhm.errors[0].message === '请输入法人代表证件号码'
                    ) {
                        // 其他 未输入值
                        Toast.fail(error.dwfrdbzjhm.errors[0].message, 3)
                        return
                    }
                }

                if (error.jbrxm != null) {
                    // 联系人姓名
                    Toast.fail(error.jbrxm.errors[0].message, 3)
                    return
                }
                if (error.jbrsjhm != null) {
                    // 联系人电话
                    Toast.fail(error.jbrsjhm.errors[0].message, 3)
                    return
                }
                if (error.dwfrdbzjhm != null) {
                    // 联系人座机号码
                    Toast.fail(error.dwfrdbzjhm.errors[0].message, 3)
                    return
                }
                if (error.jyfw) {
                    // 经营范围
                    Toast.fail(error.jyfw.errors[0].message, 3)
                    return
                }
                // 联系人身份证01   号码非空但格式不对
                if (error.jbrzjhm != null) {
                    if (
                        this.state.jbrzjlx &&
                        this.state.jbrzjlx &&
                        this.state.jbrzjlx.trim()
                    ) {
                        // 联系人身份证01
                        if (value.jbrzjhm.length > 30) {
                            Toast.fail('联系人证件号码最大30位！', 3)
                            return
                        } else if (value.jbrzjhm.length === 0) {
                            Toast.fail('请输入联系人证件号码！', 3)
                            return
                        } else if (this.state.jbrzjlx === '01') {
                            Toast.fail(error.jbrzjhm.errors[0].message, 3)
                            return
                        }
                    }
                }
                // 合作单位名称限制长度50字符
                if (fieldsValue['hzdwmc'].length > 50) {
                    Toast.fail('单位名称不允许超过50个字符', 3)
                    return
                }
                // 资质开始日期 与 资质结束日期 之间的校验
                if (this.state.zzksrq !== '' && this.state.zzjsrq !== '') {
                    if (this.state.zzksrqdate > this.state.zzjsrqdate) {
                        Toast.fail('资质开始日期不能晚于资质结束日期', 3)
                        return
                    }
                }
                // 营业开始日期和营业结束日期之间的校验
                if (this.state.yyksrq !== '' && this.state.yyjsrq !== '') {
                    if (this.state.yyksrqdate > this.state.yyjsrqdate) {
                        Toast.fail('营业期限开始日期不能晚于有营业期限结束日期', 3)
                        return
                    }
                }
                // 法人证件有效期开始 和 法人证件有效期结束之间的校验
                if (this.state.dwfrdbzjyxqksrq !== '' && this.state.dwfrdbzjyxqjsrq !== '') {
                    if (this.state.dwfrdbzjyxqksrqdate > this.state.dwfrdbzjyxqjsrqdate) {
                        Toast.fail('法人证件有效开始日期不能晚于法人证件有效结束日期', 3)
                        return
                    }
                }
                // 联系人证件类型与证件号码之间的校验
                if (
                    this.state.jbrzjlx === undefined ||
                    this.state.jbrzjlx[0] === undefined
                ) {
                    // 类型空 号码有
                    Toast.fail('请选择联系人证件类型', 3)
                    return
                }
                // // 校验联系人的身份证号码出生日期超出范围
                // if (fieldsValue['lxrzjlx'] && fieldsValue['lxrzjlx'] === '01') {
                //   // 为手机公积金单位登记时准备的方法(未登录状态)
                //   if (bbgrxx.blqd === 'app_12329' && !bbgrxx.zjhm && !bbgrxx.bpmid) {
                //     // 办理渠道是手机公积金, zjhm未传(未登录), 申请页面
                //     bbgrxx.zjhm = fieldsValue['lxrzjhm']
                //     bbgrxx.grbh = `sjgjj_${fieldsValue['lxrzjhm']}`
                //     gjjgrxx.grbh = `sjgjj_${fieldsValue['lxrzjhm']}`
                //     !Object.isFrozen(bbgrxx) && Object.freeze(bbgrxx)
                //     !Object.isFrozen(gjjgrxx) && Object.freeze(gjjgrxx)
                //   }
                //   // }
                // }
                // 校验单位地址长度小于120个字符
                let dwdzLength = fieldsValue['dwdz'].length
                if (dwdzLength > 120) {
                    Toast.fail('单位地址输入项需小于120个字符', 3)
                    return
                }
            }

            let khjgmcstr = ''
            console.log(this.fwbstore.dataSource, '----------------------------')
            console.log(typeof value.khjg, '---------------------------开户机构-')
            console.log(this.props.form.getFieldValue('khjg'), '---------------------------开户机构-')
            for (var i = 0; i < this.fwbstore.dataSource.length; i++) {
                if (this.fwbstore.dataSource && this.fwbstore.dataSource[i].value === value.khjg) {
                    khjgmcstr = this.fwbstore.dataSource[i].label
                }
            }

            console.log('---------看看提交的单位类型------------', this.state.srjglx)
            console.log('1111111看看提交的单位客户号111111111111111', fieldsValue['dwkhh'])
            // 将字段保存
            // 公共参数
            fieldsValue['zxbm'] = bbgrxx.zxbm
            fieldsValue['zjbzxbm'] = bbgrxx.zjbzxbm
            fieldsValue['zhbh'] = ''    //   
            fieldsValue['khbh'] = ''    //   
            fieldsValue['ywfl'] = '05'
            fieldsValue['ywlb'] = '68'
            fieldsValue['blqd'] = gjjgrxx.blqd
            fieldsValue['grbh'] = bbgrxx.grbh === undefined ? '' : bbgrxx.grbh // 走流程要用贝贝数据库里的"个人编号"
            fieldsValue['bpmid'] = '' + this.state.bpmid  // 
            fieldsValue['ywlsh'] = this.state.ywlsh
            fieldsValue['ywbm'] = '' + this.state.ywlsh
            fieldsValue['userid'] = bbgrxx.userid  // 
            fieldsValue['taskid'] = ''
            fieldsValue['dwbh'] = fieldsValue['dwkhh'] ? fieldsValue['dwkhh'] : ' '   // 
            fieldsValue['lcfx'] = 1
            fieldsValue['objectservice'] = 'gjjzx'
            // 流程参数
            fieldsValue['lcbz'] = 0
            fieldsValue['lcjd'] = 1
            // 表单字段：
            // fieldsValue['khjgbm'] = gjjgrxx.jgbm === undefined ? ' ' : gjjgrxx.jgbm //  
            // fieldsValue['khjgmc'] = gjjgrxx.jgbmmc === undefined ? ' ' : gjjgrxx.jgbmmc //  
            console.log('347---this.state.khjgv=======', this.state.khjgv)
            console.log('347---this.state.jgbm=======', this.state.jgbm)
            fieldsValue['zzdj'] = fieldsValue['zzdj'] ? fieldsValue['zzdj'] : ' ' // 资质等级
            fieldsValue['jbrzjlx'] = fieldsValue['jbrzjlx'] ? fieldsValue['jbrzjlx'] : ' ' // 联系人证件类型
            fieldsValue['dwfrdbzjlx'] = fieldsValue['dwfrdbzjlx'] ? fieldsValue['dwfrdbzjlx'] : ' '

            // fieldsValue['zzksrq'] = this.state.zzksrq !== '' ? this.state.zzksrq : ' ' // 资质开始日期
            // fieldsValue['zzjsrq'] = this.state.zzjsrq !== '' ? this.state.zzjsrq : ' ' // 资质结束日期

            fieldsValue['jbrzjhm'] =
                fieldsValue['jbrzjhm'] === '' ? ' ' : fieldsValue['jbrzjhm'] // 联系人证件号码

            fieldsValue.username = gjjgrxx.username ? gjjgrxx.username : fieldsValue.jbrxm

            fieldsValue.zjhm = gjjgrxx.username ? gjjgrxx.username : fieldsValue.jbrzjhm
            // hzdwlx: 
            fieldsValue['hzdwlx'] = this.state.srjglx
            // khjgbm:
            fieldsValue['khjgbm'] = ' ' // 开户机构编码
            // khjgmc:
            fieldsValue['khjgmc'] = ' '
            // dwbh:
            // fieldsValue['dwbm'] = ' '
            // tixi:
            fieldsValue['tixi'] = this.state.tixi === undefined || this.state.tixi === '' || this.state.tixi === ' ' ? '' : this.state.tixi
            // tyshyxdm:
            fieldsValue['tyshxydm'] = this.state.tyshxydm === undefined || this.state.tyshxydm === '' || this.state.tyshxydm === ' ' ? '' : this.state.tyshxydm
            // hzdwmc:
            fieldsValue['hzdwmc'] = this.state.hzdwmc === undefined || this.state.hzdwmc === '' || this.state.hzdwmc === ' ' ? '' : this.state.hzdwmc
            // dwmc:
            fieldsValue['dwmc'] = this.state.hzdwmc === undefined || this.state.hzdwmc === '' || this.state.hzdwmc === ' ' ? '' : this.state.hzdwmc
            // dwdz:
            fieldsValue['dwdz'] = this.state.dwdz === undefined || this.state.dwdz === '' || this.state.dwdz === ' ' ? '' : this.state.dwdz
            // zczb:
            fieldsValue['zczb'] = this.state.zczb === undefined || this.state.zczb === '' || this.state.zczb === ' ' ? '' : this.state.zczb
            // hzrq:
            fieldsValue['hzrq'] =
                this.state.hzrq === undefined || this.state.hzrq === '' || this.state.hzrq === ' ' ? ' ' : this.state.hzrq
            // yyqxksrq:
            fieldsValue['yyqxksrq'] =
                this.state.yyqxksrq === undefined || this.state.yyqxksrq === '' || this.state.yyqxksrq === ' ' ? ' ' : this.state.yyqxksrq
            // yyqxjsrq:
            fieldsValue['yyqxjsrq'] =
                this.state.yyqxjsrq === undefined || this.state.yyqxjsrq === '' || this.state.yyqxjsrq === ' ' ? ' ' : this.state.yyqxjsrq
            // zzzsyxqksrq:
            fieldsValue['zzzsyxqksrq'] =
                this.state.zzzsyxqksrq === undefined || this.state.zzzsyxqksrq === '' || this.state.zzzsyxqksrq === ' ' ? ' ' : this.state.zzzsyxqksrq
            // zzzsyxqjsrq:
            fieldsValue['zzzsyxqjsrq'] =
                this.state.zzzsyxqjsrq === undefined || this.state.zzzsyxqjsrq === '' || this.state.zzzsyxqjsrq === ' ' ? ' ' : this.state.zzzsyxqjsrq
            //zzzsbh:
            fieldsValue['zzzsbh'] = this.state.zzzsbh === '' ? ' ' : this.state.zzzsbh
            // xydj:
            fieldsValue['xydj'] = this.state.xydj === '' ? ' ' : this.state.xydj
            // dwfrdbzjhm:
            fieldsValue['dwfrdbzjhm'] = this.state.dwfrdbzjhm === '' ? ' ' : this.state.dwfrdbzjhm
            // dwfrdbzjlx:
            fieldsValue['dwfrdbzjlx'] = this.state.dwfrdbzjlx === '' ? ' ' : this.state.dwfrdbzjlx
            // zzzshzrq:
            fieldsValue['zzzshzrq'] =
                this.state.zzzshzrq === undefined || this.state.zzzshzrq === '' || this.state.zzzshzrq === ' ' ? ' ' : this.state.zzzshzrq
            // dwfrdbzjyxqksrq:
            fieldsValue['dwfrdbzjyxqksrq'] =
                this.state.dwfrdbzjyxqksrq === undefined || this.state.dwfrdbzjyxqksrq === '' || this.state.dwfrdbzjyxqksrq === ' ' ? ' ' : this.state.dwfrdbzjyxqksrq
            // dwfrdbzjyxqjsrq:
            fieldsValue['dwfrdbzjyxqjsrq'] =
                this.state.dwfrdbzjyxqjsrq === undefined || this.state.dwfrdbzjyxqjsrq === '' || this.state.dwfrdbzjyxqjsrq === ' ' ? ' ' : this.state.dwfrdbzjyxqjsrq
            // jbrxm:
            fieldsValue['jbrxm'] = this.state.jbrxm === undefined || this.state.jbrxm === '' || this.state.jbrxm === ' ' ? '' : this.state.jbrxm
            // jbrgddhhm:
            fieldsValue['jbrgddhhm'] = this.state.jbrgddhhm === undefined || this.state.jbrgddhhm === '' || this.state.jbrgddhhm === ' ' ? ' ' : this.state.jbrgddhhm
            // jbrsjhm:
            fieldsValue['jbrsjhm'] = this.state.jbrsjhm === undefined || this.state.jbrsjhm === '' || this.state.jbrsjhm === ' ' ? '' : this.state.jbrsjhm
            // jbrzjhm:
            fieldsValue['jbrzjhm'] = this.state.jbrzjhm === undefined || this.state.jbrzjhm === '' || this.state.jbrzjhm === ' ' ? '' : this.state.jbrzjhm
            // jbrzjlx:
            fieldsValue['jbrzjlx'] = this.state.jbrzjlx === undefined || this.state.jbrzjlx === '' || this.state.jbrzjlx === ' ' ? '' : this.state.jbrzjlx
            // bzjzhkhyh:
            fieldsValue['bzjzhkhyh'] = this.state.skyhmc1 === undefined || this.state.skyhmc1 === '' || this.state.skyhmc1 === ' ' ? '' : this.state.skyhmc1
            // bzjzhyhzh:
            fieldsValue['bzjzhyhzh'] = this.state.bzjzhyhzh === undefined || this.state.bzjzhyhzh === '' || this.state.bzjzhyhzh === ' ' ? '' : this.state.bzjzhyhzh
            // bzjzhyhhm:
            fieldsValue['bzjzhyhhm'] = this.state.bzjzhyhhm === undefined || this.state.bzjzhyhhm === '' || this.state.bzjzhyhhm === ' ' ? '' : this.state.bzjzhyhhm
            // dczhkhyh:
            fieldsValue['dczhkhyh'] = this.state.skyhmc2 === undefined || this.state.skyhmc2 === '' || this.state.skyhmc2 === ' ' ? '' : this.state.skyhmc2
            // dczhyhzh:
            fieldsValue['dczhyhzh'] = this.state.dczhyhzh === undefined || this.state.dczhyhzh === '' || this.state.dczhyhzh === ' ' ? '' : this.state.dczhyhzh
            //dczhyhhm:
            fieldsValue['dczhyhhm'] = this.state.dczhyhhm === undefined || this.state.dczhyhhm === '' || this.state.dczhyhhm === ' ' ? '' : this.state.dczhyhhm
            // sfgbwt:
            fieldsValue['sfgbwt'] = this.state.sfgbwt === undefined || this.state.sfgbwt === '' || this.state.sfgbwt === ' ' ? ' ' : this.state.sfgbwt
            // dwxyyxqksrq:
            // 中介机构和评估机构 单位协议传空  担保机构传输入值
            fieldsValue['dwxyyxqksrq'] = this.state.showMoredwxxyxq ? this.state.dwxyyxqksrq === undefined || this.state.dwxyyxqksrq === '' || this.state.dwxyyxqksrq === ' ' ? '' : this.state.dwxyyxqksrq : ''
            // dwxyyxqjsrq:
            fieldsValue['dwxyyxqjsrq'] = this.state.showMoredwxxyxq ? this.state.dwxyyxqjsrq === undefined || this.state.dwxyyxqjsrq === '' || this.state.dwxyyxqjsrq === ' ' ? '' : this.state.dwxyyxqjsrq : ''
            // wtxyyxqksrq:
            fieldsValue['wtxyyxqksrq'] = this.state.wtxyyxqksrq === undefined || this.state.wtxyyxqksrq === '' || this.state.wtxyyxqksrq === ' ' || this.state.wtxyyxqksrq === '' ? '' : this.state.wtxyyxqksrq
            // wtxyyxqjsrq:
            fieldsValue['wtxyyxqjsrq'] = this.state.wtxyyxqjsrq === undefined || this.state.wtxyyxqjsrq === '' || this.state.wtxyyxqjsrq === ' ' || this.state.wtxyyxqjsrq === '' ? '' : this.state.wtxyyxqjsrq
            // zzdj:
            fieldsValue['zzdj'] = this.state.zzdj === undefined || this.state.zzdj === '' || this.state.zzdj === ' ' ? ' ' : this.state.zzdj

            console.log('fieldsValue======', fieldsValue)

            Toast.loading('流程运行中...', 0)
            // 上传图片
            try {
                await this.onDasm()
                // if (!resultDa.success) {
                //   Toast.fail('档案上传失败', 3)
                //   return
                // }
            } catch (error) {
                console.log('---erroe------------', error)
                Toast.hide()
                Toast.fail('材料上传失败', 3)
                return
            }
            let BsxjyData = await Utils.getBsxjyData({
                easywfl: '05',
                easywlb: '6801',
                ffbm: '06',
                khbh: this.state.ywlsh,
                ywlsh: this.state.ywlsh
            })
            if (BsxjyData.ret === 0) {
                // 风控判断
                if (window.sfFkPd) {
                    await FkStore.getFkpt({
                        dwbh: value.dwkhh ? value.dwkhh : ' ',
                        ywfl: '05',
                        ywlb: '68',
                        objectservice: 'gjjzx',
                        czlx: 'add',
                        hzdwmc: this.state.hzdwmc,
                        tyshxydm: this.state.tyshxydm,
                        bzjzhyhzh: this.state.bzjzhyhzh === null || this.state.bzjzhyhzh === undefined || this.state.bzjzhyhzh === '' || this.state.bzjzhyhzh === ' ' ? '' : this.state.bzjzhyhzh,
                        dczhyhzh: this.state.dczhyhzh === null || this.state.dczhyhzh === undefined || this.state.dczhyhzh === '' || this.state.dczhyhzh === ' ' ? '' : this.state.dczhyhzh,
                        bzjzhyhhm: this.state.bzjzhyhhm === null || this.state.bzjzhyhhm === undefined || this.state.bzjzhyhhm === '' || this.state.bzjzhyhhm === ' ' ? '' : this.state.bzjzhyhhm,
                        dczhyhhm: this.state.dczhyhhm === null || this.state.dczhyhhm === undefined || this.state.dczhyhhm === '' || this.state.dczhyhhm === ' ' ? '' : this.state.dczhyhhm,
                        hzdwlx: this.state.srjglx,
                        bpmid: this.state.bpmid,
                        jbrzjhm: this.state.jbrzjhm === null || this.state.jbrzjhm === undefined || this.state.jbrzjhm === '' || this.state.jbrzjhm === ' ' ? '' : this.state.jbrzjhm,
                        jbrsjhm: this.state.jbrsjhm === null || this.state.jbrsjhm === undefined || this.state.jbrsjhm === '' || this.state.jbrsjhm === ' ' ? '' : this.state.jbrsjhm,
                    })
                    if (FkStore.Fkpt.ret === 1) { // 若存在风险
                        Toast.fail(FkStore.Fkpt.yjnr, 3)
                        return
                    } else if (FkStore.Fkpt.ret === 2) { // 若存在风险，但不影响业务运行
                        this.fxtc(FkStore.Fkpt.yjnr, value)
                    } else if (FkStore.Fkpt.ret === 0) { // 无风险
                        if (FkStore.Fkpt && FkStore.Fkpt.sureid) {
                            this.rule.getRuleById({ sureid: FkStore.Fkpt.sureid })
                        }
                        console.log('-------123fieldsValue-----', fieldsValue)
                        await dbgslrStore.getdkhzdwadddjTjsp(fieldsValue)
                        console.log(dbgslrStore.dkhzdwadddjTjsp.success, 'dbgslrStore.dkhzdwadddjTjsp.success') // 如果成功

                        if (dbgslrStore.dkhzdwadddjTjsp.success) {
                            console.log(dbgslrStore.dkhzdwadddjTjsp.success, 'dbgslrStore.dkhzdwadddjTjsp.success') // 如果成功
                            Toast.success(dbgslrStore.dkhzdwadddjTjsp.msg, 3, this.onQxClick)
                        } else { // 如果失败
                            if (dbgslrStore.dkhzdwadddjTjsp.ret === 2) {
                                Toast.hide()
                                SyPopup.alert({
                                    content: dbgslrStore.dkhzdwadddjTjsp.msg,
                                    okText: '继续',
                                    cancelText: '取消',
                                    onOk: async () => {
                                        Toast.loading('流程运行中...', 0)
                                        fieldsValue.isSecurity = 1
                                        // 真正保存的方法
                                        await dbgslrStore.getdkhzdwadddjTjsp(fieldsValue)
                                        if (dbgslrStore.dkhzdwadddjTjsp.success) {
                                            // 如果保存成功
                                            Toast.success(dbgslrStore.dkhzdwadddjTjsp.msg, 3, this.onQxClick)
                                        } else {
                                            await this.delDasm()
                                            Toast.fail(dbgslrStore.dkhzdwadddjTjsp.msg, 3)
                                        }
                                    },
                                    onCancel: async () => {
                                        Toast.loading()
                                        await this.delDasm()
                                        Toast.hide()
                                        this.onQxClick()
                                    }
                                })
                            } else {
                                await this.delDasm()
                                Toast.fail(dbgslrStore.dkhzdwadddjTjsp.msg, 3)
                                if (dbgslrStore.dkhzdwadddjTjsp.bpmParam && dbgslrStore.dkhzdwadddjTjsp.bpmParam.sureid) {
                                    this.rule.getRuleById({ sureid: dbgslrStore.dkhzdwadddjTjsp.sureid })
                                }
                            }
                        }
                    } else {
                        await this.delDasm()
                        console.log(dbgslrStore.dkhzdwadddjTjsp.success, 'dbgslrStore.dkhzdwadddjTjsp.success') // 如果成功
                        Toast.fail(BsxjyData.msg, 3)
                    }
                }
            }
            /* } else {
              this.setState({
                gzData: kfsdjStore.KfsdjTjRule.data
              })
              Toast.fail('规则校验不通过！', 3)
            }*/
        })
    }
    onGljgChange = e => {
        console.log(12121212122, e)
        this.setState({ khjgv: e.mc })
    }
    // 点击取消按钮
    onQxClick = () => {
        try {
            window.AppPop()
            console.log('返回贝贝==>', 'success')
        } catch (e) {
            console.log('返回贝贝==>', 'fail', e)
        }
    }
    // 返回主界面的方法
    goBack = () => {
        console.log('111111111111')
        this.props.history.jump({
            path: '/gjj_cs/dkhzdwglmain',
        })
    }
    // 返回增加界面的方法
    goBackadd = () => {
        this.props.history.jump({
            path: '/gjj_cs/dkhzdwgladd',
        })
    }
    dkbzjzkxxtx = () => {
        console.log('22222')
        this.setState({ showbt: false })
        setTimeout(() => {
            this.setState({ bzjzhxxshow: !this.state.bzjzhxxshow })
        }, 10)
    }
    // closebzjzhxxtj  = async() => { }
    // 保证金账户信息保存方法
    onSavedzjxxClick = async () => {
        this.props.form.validateFields(['bzjzhyhzh', 'bzjzhyhhm'], async (error, value) => {
            console.log(this.state.skyhmc1)
            await this.setState({
                bzjzhkhyh: this.state.skyhmc1,
                bzjzhyhzh: value.bzjzhyhzh === '' || value.bzjzhyhzh === ' ' || value.bzjzhyhzh === undefined ? '' : value.bzjzhyhzh,
                bzjzhyhhm: value.bzjzhyhhm === '' || value.bzjzhyhhm === ' ' || value.bzjzhyhhm === undefined ? '' : value.bzjzhyhhm,
            })

            console.log('--------bzjzhkhyh-----------', this.state.bzjzhyhzh)
            this.setState({
                bzjzhxxshow: false,
            })
            setTimeout(() => {
                this.setState({ showbt: true, })
            }, 10)

        })
    }
    // 代偿账户信息保存方法
    onSaveDczhClick = async () => {

        this.props.form.validateFields(['dczhyhzh', 'dczhyhhm'], async (error, value) => {
            await this.setState({
                dczhyhkhyh: this.state.skyhmc2,
                dczhyhzh: value.dczhyhzh === '' || value.dczhyhzh === ' ' || value.dczhyhzh === undefined ? '' : value.dczhyhzh,
                dczhyhhm: value.dczhyhhm === '' || value.dczhyhhm === ' ' || value.dczhyhhm === undefined ? '' : value.dczhyhhm,
            })
            console.log('--------bzjzhkhyh1-----------', this.state.bzjzhyhzh)
            console.log('--------dczhyhzh-----------', this.state.dczhyhzh)
            console.log('--------dczhyhhm-----------', this.state.dczhyhhm)
            this.setState({
                dczhxxshow: false,
            })
            setTimeout(() => {
                this.setState({ showbt: true, })
            }, 10)
        })
    }
    gbbzjzhtxmodal = () => {
        console.log('111222')
        this.setState({ bzjzhxxshow: !this.state.bzjzhxxshow, skyhmc: '' })
        setTimeout(() => {
            this.setState({ showbt: true })
        }, 10)

    }
    // 选择框的 changge 事件
    handleCxdwxx = (v) => {
        console.log('===========看看hzdwmc=====', v)
        this.setState({ sryhmc: v })
    }

    render() {
        const { getFieldProps, getFieldValue } = this.props.form

        const { type, bpmid } = this.state
        const { zzdj, showtitle, zzksrq, zzksrqdate, zzjsrq, zzjsrqdate, yyksrq,
            yyksrqdate,
            yyjsrq,
            yyjsrqdate,
            hzrq, hzrqdate,
            zzzshzrq, zzzshzrqdate,
            frzjyxqks,
            frzjyxqksdate,
            frzjyxqjs,
            frzjyxqjsdate,
            srjglx,
            yyqxksrq, yyqxksrqdate,
            yyqxjsrq, yyqxjsrqdate,
            zzzsyxqksrq, zzzsyxqksrqdate,
            zzzsyxqjsrq, zzzsyxqjsrqdate,
            dwxyyxqksrq, dwxyyxqksrqdate,
            dwxyyxqjsrq, dwxyyxqjsrqdate,
            wtxyyxqksrq, wtxyyxqksrqdate,
            wtxyyxqjsrq, wtxyyxqjsrqdate,
            dwfrdbzjyxqksrq, dwfrdbzjyxqksrqdate,
            dwfrdbzjyxqjsrq, dwfrdbzjyxqjsrqdate } = this.state

        return (<div>
            <GjjPublicPage
                pageTitle={{
                    isShow: this.state.showbt,
                    title: '贷款合作单位新增',
                    onBack: this.goBack,
                }}
                status={1}
                isHeader={true}
                components={[
                    {
                        type: 'content',
                        title: '机构类型',
                        isShow: true,
                        status: 1,
                        content: (
                            <>
                                <List className='sylist'>
                                    {/* 机构类型 */}
                                    {/* 机构类型选择框*/}
                                    <SYPickerTag
                                        num={3}
                                        dataSource={[
                                            { value: '03', label: '担保机构' },
                                            { value: '02', label: '评估机构' },
                                            { value: '01', label: '中介机构' },
                                        ]}
                                        onChangeGetSelet={val => this.onChangeGljgGetSelet(val)} // 获取选择的机构类型的值
                                        placeholder='请选择'
                                        {...getFieldProps('dkhzdwlx', {
                                            rules: [{ required: true, message: '机构类型' }],
                                            initialValue: '01'
                                        })}
                                    >机构类型
                    </SYPickerTag>
                                </List>
                            </>)
                    },
                    {
                        type: 'content',
                        status: 1,
                        title: '基本信息',
                        isShow: true,
                        content: (
                            <>
                                <List className='sylist'>
                                    <div style={{ display: 'none' }}>
                                        <SYPickerTagZzjg
                                            num={3}
                                            arrow='horizontal'
                                            returnType='string'
                                            onChangeGetSelet={() => { }}
                                            params={{ khlx: '03' }}
                                            onMount={(store) => { this.fwbstore = store }}
                                            {...getFieldProps('khjg', {
                                                rules: [
                                                    { required: false, message: '请输入开户机构' },
                                                ]
                                                // initialValue: { zzdj },
                                            })}
                                        >开户机构</SYPickerTagZzjg>
                                    </div>
                                    {/* 统一社会信用代码 */}
                                    <InputItem
                                        type='text'
                                        placeholder='请输入'
                                        maxLength={100}
                                        clear
                                        onBlur={() => { setTimeout(() => { this.dkhzdwxxcx() }, 0) }}
                                        style={{ 'textAlign': 'right' }}
                                        labelNumber='7'
                                        {...getFieldProps('tyshxydm', {
                                            initialValue: '',
                                            rules: [
                                                { required: true, message: '请输入通过一社会信用代码' },
                                                {
                                                    pattern: regList.Tyshxydm,
                                                    message: '统一社会信用代码输入有误'
                                                }
                                            ]
                                        })}
                                    >统一社会信用代码</InputItem>
                                    <InputItem
                                        type='text'
                                        placeholder='请输入'
                                        maxLength={100}
                                        clear
                                        disabled='true'
                                        style={{ 'textAlign': 'right' }}
                                        labelNumber='7'
                                        {...getFieldProps('dwkhh', {
                                            initialValue: '',
                                            rules: [
                                            ]
                                        })}
                                    >单位客户号</InputItem>
                                    {/* 体系  选择框 */}
                                    <div style={{ display: this.state.showMore1 ? 'block' : 'none' }}>
                                        <List.Item>
                                            <SYPickerTag
                                                num={2}
                                                dataSource={tixidatasource}
                                                returnType='string'
                                                {...getFieldProps('tixi',
                                                    {
                                                        initialValue: '',
                                                        onChange: v => { this.setState({ tixi: v }) }
                                                    }
                                                )}
                                            >体系</SYPickerTag>
                                        </List.Item>
                                    </div>
                                    {/* 单位名称 */}
                                    <InputItem
                                        type='text'
                                        placeholder='请输入'
                                        maxLength={50}
                                        clear
                                        disabled={this.state.gjdwxxstate}
                                        onBlur={(v) => { this.setState({ hzdwmc: v }) }}
                                        style={{ 'textAlign': 'right' }}
                                        labelNumber='7'
                                        {...getFieldProps('hzdwmc', {
                                            rules: [
                                                { required: true, message: '请输入单位名称' },
                                                { max: 50, message: '单位名称最多输入50字符' }
                                                // { pattern: /^[A-Za-z\u4e00-\u9fa5]{0,50}$/, message: '只允许输入不超过50个汉字和字母' }
                                            ]
                                        })}
                                    >单位名称：</InputItem>
                                    {/* 单位地址： */}
                                    <InputItem
                                        type='text'
                                        placeholder='请输入'
                                        maxLength={50}
                                        clear
                                        disabled={this.state.gjdwxxstate}
                                        onBlur={(v) => { this.setState({ dwdz: v }) }}
                                        style={{ 'textAlign': 'right' }}
                                        labelNumber='7'
                                        {...getFieldProps('dwdz', {
                                            rules: [
                                                { required: true, message: '请输入单位地址' },
                                                { max: 50, message: '单位地址最多输入50字符' }
                                                // { pattern: /^[A-Za-z\u4e00-\u9fa5]{0,50}$/, message: '只允许输入不超过50个汉字和字母' }
                                            ]
                                        })}
                                    >单位地址：</InputItem>
                                    {/* 营业期限开始日期 */}
                                    <List.Item
                                        className={yyqxksrq && yyqxksrq.trim() && yyqxksrq !== '请选择' ? 'black-list-extra bigExtra' : 'bigExtra'}
                                        arrow='horizontal'
                                        extra={yyqxksrq || '请选择'}
                                        onClick={() => { this.yyqxksrq.show() }}
                                    >营业期限开始日期</List.Item>
                                    <SyDate
                                        onRef={ref => { this.yyqxksrq = ref }}
                                        checkDate={date => { this.changeDate('yyqxksrq', date) }}
                                        beginDate={yyqxksrqdate}
                                    />
                                    {/* 营业期限结束日期 */}
                                    <List.Item
                                        className={yyqxjsrq && yyqxjsrq.trim() && yyqxjsrq !== '请选择' ? 'black-list-extra bigExtra' : 'bigExtra'}
                                        arrow='horizontal'
                                        extra={yyqxjsrq || '请选择'}
                                        onClick={() => { this.yyqxjsrq.show() }}
                                    >营业期限结束日期</List.Item>
                                    <SyDate
                                        onRef={ref => { this.yyqxjsrq = ref }}
                                        checkDate={date => { this.changeDate('yyqxjsrq', date) }}
                                        beginDate={yyqxjsrqdate}
                                    />
                                    <MoneyInput
                                        style={{ 'textAlign': 'right' }}
                                        clear
                                        type='money'
                                        labelNumber='7'
                                        {...getFieldProps('zczb',
                                            {
                                                rules: [
                                                    { required: true, message: '请输入注册资本' },
                                                    {
                                                        pattern: regList.Money,
                                                        message: '注册资本输入金额有误'
                                                    }
                                                ],
                                                onChange: v => { this.setState({ zczb: v }) }
                                            })}
                                    >注册资本(万元)</MoneyInput>
                                    <InputItem
                                        type='text'
                                        placeholder='请输入'
                                        maxLength={50}
                                        clear
                                        onBlur={(v) => { this.setState({ jyfw: v }) }}
                                        style={{ 'textAlign': 'right' }}
                                        labelNumber='7'
                                        {...getFieldProps('jyfw', {
                                            rules: [
                                                { required: true, message: '请输入经营范围' },
                                                { max: 70, message: '*经营范围最多输入225字节' }
                                                // { validator: this.validatelrxx },
                                            ]
                                        })}
                                    >经营范围</InputItem>
                                    {/* 获证日期 */}
                                    <List.Item
                                        className={hzrq && hzrq.trim() && hzrq !== '请选择' ? 'black-list-extra bigExtra' : 'bigExtra'}
                                        arrow='horizontal'
                                        // disabled={this.state.gjdwxxstate}
                                        extra={hzrq || '请选择'}
                                        // onClick={() => { this.hzrq.show() }}
                                        onClick={() => { this.handlehzrqshow() }}
                                    >获证日期</List.Item>
                                    <SyDate
                                        onRef={ref => { this.hzrq = ref }}
                                        checkDate={date => { this.changeDate('hzrq', date) }}
                                        beginDate={hzrqdate}
                                    />
                                    <SYPickerTag
                                        num={1}
                                        dataSource={zzdjSource}
                                        returnType='string'
                                        {...getFieldProps('zzdj', { initialValue: '', onChange: v => { this.setState({ zzdj: v }) } })}

                                    >资质等级</SYPickerTag>
                                    {/* 资质证书有效期开始日期 */}
                                    <List.Item
                                        className={zzzsyxqksrq && zzzsyxqksrq.trim() && zzzsyxqksrq !== '请选择' ? 'black-list-extra bigExtra' : 'bigExtra'}
                                        arrow='horizontal'
                                        extra={zzzsyxqksrq || '请选择'}
                                        onClick={() => { this.zzzsyxqksrq.show() }}
                                        wrap={true}
                                    >资质证书有效期开始日期</List.Item>
                                    <SyDate
                                        onRef={ref => { this.zzzsyxqksrq = ref }}
                                        checkDate={date => { this.changeDate('zzzsyxqksrq', date) }}
                                        beginDate={zzzsyxqksrqdate}
                                    />
                                    {/* 资质证书有效期结束日期 */}
                                    <List.Item
                                        className={zzzsyxqjsrq && zzzsyxqjsrq.trim() && zzzsyxqjsrq !== '请选择' ? 'black-list-extra bigExtra' : 'bigExtra'}
                                        arrow='horizontal'
                                        extra={zzzsyxqjsrq || '请选择'}
                                        onClick={() => { this.zzzsyxqjsrq.show() }}
                                        wrap={true}
                                    >资质证书有效期结束日期</List.Item>
                                    <SyDate
                                        onRef={ref => { this.zzzsyxqjsrq = ref }}
                                        checkDate={date => { this.changeDate('zzzsyxqjsrq', date) }}
                                        beginDate={zzzsyxqjsrqdate}
                                    />

                                    {/* 资质证书编号 */}
                                    <InputItem
                                        type='text'
                                        placeholder='请输入'
                                        maxLength={50}
                                        clear
                                        onBlur={(v) => { this.setState({ zzzsbh: v }) }}
                                        style={{ 'textAlign': 'right' }}
                                        labelNumber='7'
                                        {...getFieldProps('zzzsbh', {
                                            rules: [
                                                { required: true, message: '请输入资质证书编号' },
                                            ]
                                        })}
                                    >资质证书编号</InputItem>

                                    {/* 资质证书获证时间 */}
                                    <List.Item
                                        className={zzzshzrq && zzzshzrq.trim() && zzzshzrq !== '请选择' ? 'black-list-extra bigExtra' : 'bigExtra'}
                                        arrow='horizontal'
                                        extra={zzzshzrq}
                                        onClick={() => { this.zzzshzrq.show() }}
                                    >资质证书获证时间</List.Item>
                                    <SyDate
                                        onRef={ref => { this.zzzshzrq = ref }}
                                        checkDate={date => { this.changeDate('zzzshzrq', date) }}
                                        beginDate={zzzshzrqdate}
                                    />
                                    {/* 信用等级 */}
                                    <InputItem
                                        type={type}
                                        placeholder='请输入'
                                        clear
                                        onBlur={v => { this.setState({ xydj: v }) }}
                                        style={{ textAlign: 'right' }}
                                        {...getFieldProps('xydj', {
                                            initialValue: '',
                                            rules: [
                                                { required: false },
                                                { pattern: /^[\u4e00-\u9fa5]{0,25}$/, message: '只允许输入不超过25个汉字' }
                                            ]
                                        })}
                                        labelNumber='7'
                                    >信用等级</InputItem>
                                    <div style={{ display: this.state.showMoredwxxyxq ? 'block' : 'none' }}>
                                        {/* 单位协议有效期开始 */}
                                        <List.Item
                                            className={dwxyyxqksrq && dwxyyxqksrq.trim() && dwxyyxqksrq !== '请选择' ? 'black-list-extra bigExtra' : 'bigExtra'}
                                            arrow='horizontal'
                                            extra={dwxyyxqksrq}
                                            onClick={() => { this.dwxyyxqksrq.show() }}
                                            warp={true}
                                        >单位协议有效期开始</List.Item>
                                        <SyDate
                                            onRef={ref => { this.dwxyyxqksrq = ref }}
                                            checkDate={date => { this.changeDate('dwxyyxqksrq', date) }}
                                            beginDate={dwxyyxqksrqdate}
                                        />
                                        {/* 单位协议有效期结束 */}
                                        <List.Item
                                            className={dwxyyxqjsrq && dwxyyxqjsrq.trim() && dwxyyxqjsrq !== '请选择' ? 'black-list-extra bigExtra' : 'bigExtra'}
                                            arrow='horizontal'
                                            extra={dwxyyxqjsrq}
                                            onClick={() => { this.dwxyyxqjsrq.show() }}
                                            warp={true}
                                        >单位协议有效期结束</List.Item>
                                        <SyDate
                                            onRef={ref => { this.dwxyyxqjsrq = ref }}
                                            checkDate={date => { this.changeDate('dwxyyxqjsrq', date) }}
                                            beginDate={dwxyyxqjsrqdate}
                                        />
                                    </div>
                                </List>
                            </>
                        ),
                    },
                    // 法人信息
                    {
                        type: 'content',
                        title: '法人信息',
                        isShow: true,
                        status: 1,
                        content: (
                            <>
                                <SYCard showBeforeAndAfterLine>
                                    <SYCard.Body>
                                        <List className='sylist'>
                                            <InputItem
                                                type={type}
                                                placeholder='请输入'
                                                clear
                                                disabled={this.state.gjdwxxstate}
                                                onBlur={v => {
                                                    this.setState({ dwfrdbxm: v })
                                                }}
                                                style={{ textAlign: 'right' }}
                                                {...getFieldProps('dwfrdbxm', {
                                                    initialValue: '',
                                                    rules: [
                                                        { required: true, message: '请输入法人代表姓名' },
                                                        // { validator: this.validatelrxx }
                                                    ]
                                                })}
                                                labelNumber='7'
                                            >姓名</InputItem>
                                            <SYPickerTag
                                                maxSize={1}
                                                order
                                                disabledTags={this.state.dwfzzjlxisgjdwxxstate}
                                                dataSource={dbgslrStore.ZjlxData} // 前面请求来的证件类型
                                                returnType='string'
                                                {...getFieldProps('dwfrdbzjlx', {
                                                    initialValue:
                                                        this.state.dwfrdbzjlx &&
                                                            String(this.state.dwfrdbzjlx).trim() !== '' ? this.state.dwfrdbzjlx : '01',
                                                    onChange: async v => { await this.setState({ dwfrdbzjlx: v }) },
                                                    rules: [{ required: true, message: '请选择法人代表证件类型' }]
                                                })}
                                            >证件类型</SYPickerTag>
                                            <InputItem
                                                maxLength={18}
                                                type={type}
                                                placeholder='请输入'
                                                clear
                                                disabled={this.state.gjdwxxstate}
                                                onBlur={v => { this.setState({ dwfrdbzjhm: v }) }}
                                                style={{ textAlign: 'right' }}
                                                {...getFieldProps('dwfrdbzjhm', {
                                                    // initialValue: this.state.dwfrdbzjhm,
                                                    initialValue: '',
                                                    rules: [
                                                        { required: true, message: '请输入法人代表证件号码' },
                                                        // { validator: this.validatelrxx }
                                                    ]
                                                })}
                                                labelNumber='7'
                                            >证件号码</InputItem>
                                            <List.Item
                                                className={dwfrdbzjyxqksrq && dwfrdbzjyxqksrq.trim() && dwfrdbzjyxqksrq !== '请选择' ? 'black-list-extra bigExtra' : 'bigExtra'}
                                                arrow='horizontal'
                                                extra={dwfrdbzjyxqksrq || '请选择'}
                                                onClick={() => { this.dwfrdbzjyxqksrq.show() }}
                                            >证件有效开始日期</List.Item>
                                            <SyDate
                                                onRef={ref => { this.dwfrdbzjyxqksrq = ref }}
                                                checkDate={date => { this.changeDate('dwfrdbzjyxqksrq', date) }}
                                                beginDate={dwfrdbzjyxqksrqdate}
                                            />
                                            <List.Item
                                                className={dwfrdbzjyxqjsrq && dwfrdbzjyxqjsrq.trim() && dwfrdbzjyxqjsrq !== '请选择' ? 'black-list-extra bigExtra' : 'bigExtra'}
                                                arrow='horizontal'
                                                extra={dwfrdbzjyxqjsrq || '请选择'}
                                                onClick={() => { this.dwfrdbzjyxqjsrq.show() }}
                                            >证件有效结束日期</List.Item>
                                            <SyDate
                                                onRef={ref => { this.dwfrdbzjyxqjsrq = ref }}
                                                checkDate={date => { this.changeDate('dwfrdbzjyxqjsrq', date) }}
                                                beginDate={dwfrdbzjyxqjsrqdate}
                                            />
                                        </List>
                                    </SYCard.Body>
                                </SYCard>
                            </>)
                    },
                    {
                        type: 'content',
                        title: '联系人信息',
                        isShow: true,
                        status: 1,
                        content: (
                            <>
                                <SYCard showBeforeAndAfterLine>
                                    <SYCard.Body>
                                        <List className='sylist'>
                                            <InputItem
                                                type={type}
                                                placeholder='请输入'
                                                clear
                                                onBlur={v => { this.setState({ jbrxm: v }) }}
                                                style={{ textAlign: 'right' }}
                                                {...getFieldProps('jbrxm', {
                                                    initialValue: this.state.jbrxm,
                                                    rules: [
                                                        { required: true, message: '请输入联系人姓名' },
                                                        // { validator: this.validatelrxx }
                                                    ]
                                                })}
                                            >姓名</InputItem>
                                            <InputItem
                                                type={type}
                                                placeholder='请输入'
                                                clear
                                                onBlur={v => { this.setState({ jbrsjhm: v }) }}
                                                style={{ textAlign: 'right' }}
                                                {...getFieldProps('jbrsjhm', {
                                                    initialValue: this.state.jbrsjhm,
                                                    rules: [
                                                        { required: true, message: '请输入联系人电话' },
                                                        // { validator: this.validatelrxx }
                                                    ]
                                                })}
                                            >电话</InputItem>
                                            <InputItem
                                                type={type}
                                                placeholder='请输入'
                                                clear
                                                onBlur={v => { this.setState({ jbrgddhhm: v }) }}
                                                style={{ textAlign: 'right' }}
                                                {...getFieldProps('jbrgddhhm', {
                                                    initialValue: '',
                                                    rules: [
                                                        // { required: true, message: '请输入联系人座机号码' },
                                                        // { validator: this.validatelrxx }
                                                    ]
                                                })}
                                            >座机号码</InputItem>
                                            <SYPickerTag
                                                maxSize={1}
                                                order
                                                dataSource={dbgslrStore.ZjlxData} // 前面请求来的证件类型
                                                returnType='string'
                                                {...getFieldProps('jbrzjlx', {
                                                    initialValue:
                                                        this.state.jbrzjlx &&
                                                            String(this.state.jbrzjlx).trim() !== '' ? this.state.jbrzjlx : '01',
                                                    onChange: v => { this.setState({ jbrzjlx: v }) },
                                                    rules: [{ required: true, message: '请选择联系人证件类型' }]
                                                })}
                                            >证件类型</SYPickerTag>
                                            <InputItem
                                                isShow={false}
                                                maxLength={18}
                                                type={type}
                                                placeholder='请输入'
                                                clear
                                                onBlur={v => { this.setState({ jbrzjhm: v }) }}
                                                style={{ textAlign: 'right' }}
                                                {...getFieldProps('jbrzjhm', {
                                                    // initialValue: this.state.jbrzjhm,
                                                    initialValue: '',
                                                    rules: [
                                                        { required: true, message: '请输入联系人证件号码' },
                                                        // { validator: this.validatelrxx }
                                                    ]
                                                })}
                                                labelNumber='7'
                                            >证件号码</InputItem>
                                            <div style={{ display: this.state.showMore2 ? 'block' : 'none' }}>
                                                <SYPickerTag
                                                    num={1}
                                                    dataSource={sfgbwtSource}
                                                    returnType='string'
                                                    {...getFieldProps('sfgbwt', { initialValue: this.state.sfgbwt })}
                                                    onChange={v => { this.setState({ sfgbwt: v }) }}
                                                >是否关闭网厅</SYPickerTag>
                                                {/* 网厅协议有效期 */}
                                                <List.Item
                                                    className={wtxyyxqksrq && wtxyyxqksrq.trim() && wtxyyxqksrq !== '请选择' ? 'black-list-extra bigExtra' : 'bigExtra'}
                                                    arrow='horizontal'
                                                    extra={wtxyyxqksrq}
                                                    onClick={() => { this.wtxyyxqksrq.show() }}
                                                    warp={true}
                                                >网厅协议有效期开始</List.Item>
                                                <SyDate
                                                    onRef={ref => { this.wtxyyxqksrq = ref }}
                                                    checkDate={date => { this.changeDate('wtxyyxqksrq', date) }}
                                                    beginDate={wtxyyxqksrqdate}
                                                />
                                                <List.Item
                                                    className={wtxyyxqjsrq && wtxyyxqjsrq.trim() && wtxyyxqjsrq !== '请选择' ? 'black-list-extra bigExtra' : 'bigExtra'}
                                                    arrow='horizontal'
                                                    extra={wtxyyxqjsrq}
                                                    onClick={() => { this.wtxyyxqjsrq.show() }}
                                                    warp={true}
                                                >网厅协议有效期结束</List.Item>
                                                <SyDate
                                                    onRef={ref => { this.wtxyyxqjsrq = ref }}
                                                    checkDate={date => { this.changeDate('wtxyyxqjsrq', date) }}
                                                    beginDate={wtxyyxqjsrqdate}
                                                />
                                            </div>
                                        </List>
                                    </SYCard.Body>
                                </SYCard>
                            </>
                        )
                    },
                    {
                        type: 'content',
                        title: '账户信息',
                        isShow: this.state.zhxxtitleshow,
                        status: 1,
                        content: (
                            <>
                                <List className='sylist'>
                                    <List.Item
                                        className={'123'}
                                        arrow='horizontal'
                                        extra={'请输入'}
                                        onClick={() => { this.dkbzjzkxxtx() }}
                                    // onCancel={() => this.goBackadd}
                                    >保证金账户信息</List.Item>
                                    <SyModal
                                        // childModals={[this.grModal1]}
                                        ref={ref => (this.grbzjModal = ref)}
                                        // changeStateTag={this.closeXgym}
                                        visible={this.state.bzjzhxxshow}
                                    // style={{ background: '#F2F2F2' }}
                                    >
                                        <NavBar
                                            mode='light'
                                            icon={<LeftClickIcon />}
                                            onLeftClick={() => this.gbbzjzhtxmodal()}
                                        >保证金账户信息添加</NavBar>
                                        <div style={{ marginTop: '2.875rem' }} />
                                        <List>
                                            {/* 列表内容 */}
                                            <List.Item
                                                arrow='horizontal'
                                                className={
                                                    this.state.skyhmc1 &&
                                                        this.state.skyhmc1.trim() &&
                                                        this.state.skyhmc1 !== '请选择'
                                                        ? 'black-list-extra Dbgsslr-yhmcxs'
                                                        : 'Dbgsslr-yhmcxs'
                                                }
                                                extra={this.state.skyhmc1}
                                                onClick={() => this.setState({ khyhmd1: true })}
                                                {...getFieldProps('bzjzhkhyh', {
                                                    rules: [
                                                        { required: false, message: '请输入保证金账户银行账号' }]
                                                })}

                                            >保证金账户开户银行
                                            </List.Item>
                                            <InputItem
                                                type='text'
                                                maxLength={50}
                                                clear
                                                onBlur={(v) => { this.setState({ bzjzhyhzh: v }) }}
                                                style={{ 'textAlign': 'right' }}
                                                labelNumber='7'
                                                {...getFieldProps('bzjzhyhzh', {
                                                    initialValue: this.state.bzjzhyhzh,
                                                    rules: [
                                                        { required: false, message: '请输入保证金账户银行账号' },
                                                        // { validator: this.validatelrxx }
                                                    ]
                                                })}
                                            >保证金账户银行账号</InputItem>
                                            <InputItem
                                                type='text'
                                                maxLength={50}
                                                clear
                                                onBlur={(v) => { this.setState({ bzjzhyhhm: v }) }}
                                                style={{ 'textAlign': 'right' }}
                                                labelNumber='7'
                                                {...getFieldProps('bzjzhyhhm', {
                                                    initialValue: this.state.bzjzhyhhm,
                                                    rules: [
                                                        { required: false, message: '请输入保证金账户名称' },
                                                        // { validator: this.validatelrxx }
                                                    ]
                                                })}
                                            >保证金账户户名</InputItem>
                                            <FixedButton
                                                singleButton
                                                nextContent='保存'
                                                nextClick={this.onSavedzjxxClick}
                                            />
                                        </List>
                                    </SyModal>
                                    {/* 保证金账户名称 */}
                                    <List.Item
                                        className={'123'}
                                        arrow='horizontal'
                                        extra={'请输入'}
                                        onClick={() => { this.setState({ dczhxxshow: !this.state.dczhxxshow, showbt: false }) }}
                                    >代偿账户信息</List.Item>
                                    <SyModal
                                        // childModals={[this.grModal1]}
                                        ref={ref => (this.grdcModal = ref)}
                                        // changeStateTag={this.closeXgym}
                                        visible={this.state.dczhxxshow}
                                        style={{ background: '#F2F2F2' }}
                                    >
                                        <NavBar
                                            mode='light'
                                            icon={<LeftClickIcon />}
                                            onLeftClick={() => this.setState({ dczhxxshow: !this.state.dczhxxshow, showbt: false })}
                                        >代偿账户信息添加</NavBar>
                                        <div style={{ marginTop: '2.875rem' }} />
                                        <List>
                                            {/* 列表内容 */}
                                            <List.Item
                                                arrow='horizontal'
                                                className={
                                                    this.state.skyhmc2 &&
                                                        this.state.skyhmc2.trim() &&
                                                        this.state.skyhmc2 !== '请选择'
                                                        ? 'black-list-extra Dbgsslr-yhmcxs'
                                                        : 'Dbgsslr-yhmcxs'
                                                }
                                                extra={this.state.skyhmc2}

                                                onClick={() => this.setState({ khyhmd2: true })}
                                                {...getFieldProps('dczhkhyh', { initialValue: '' })

                                                }
                                            >代偿账户开户银行
                                            </List.Item>
                                            <InputItem
                                                type='text'
                                                maxLength={50}
                                                clear
                                                onBlur={(v) => { this.setState({ dczhyhzh: v }) }}
                                                style={{ 'textAlign': 'right' }}
                                                labelNumber='7'
                                                {...getFieldProps('dczhyhzh', {
                                                    initialValue: '',
                                                    rules: [
                                                        { required: false, message: '请输入代偿银行账号' },
                                                        // { validator: this.validatelrxx }
                                                    ]
                                                })}
                                            >代偿账户银行账号</InputItem>
                                            <InputItem
                                                type='text'
                                                maxLength={50}
                                                clear
                                                onBlur={(v) => { this.setState({ dczhyhhm: v }) }}
                                                style={{ 'textAlign': 'right' }}
                                                labelNumber='7'
                                                {...getFieldProps('dczhyhhm', {
                                                    initialValue: '',
                                                    rules: [
                                                        { required: false, message: '请输入代偿账户名称' },
                                                        // { validator: this.validatelrxx }
                                                    ]
                                                })}
                                            >代偿账户名称</InputItem>
                                            <FixedButton
                                                singleButton
                                                nextContent='保存'
                                                nextClick={this.onSaveDczhClick}
                                            />
                                        </List>
                                    </SyModal>
                                </List>
                            </>
                        )
                    },

                    {
                        type: 'files',
                        status: 1,
                        isShow: true,
                        ...{
                            easywfl: '05',
                            easywlb: '6801',
                            proccesskey: 'hfb_hzdwgladd_new',
                            taskdefinitionkey: 'sq'
                        },
                        onRef: (ref) => { this.eamsChild = ref }
                    },
                    {
                        type: 'rules',
                        status: 1,
                        isShow: true,
                        onRef: (ref) => {
                            this.rule = ref
                        },
                    },
                    {
                        type: 'button',
                        status: 1,
                        isShow: true,
                        content: (<>
                            <FixedButton
                                singleButton
                                nextContent='提交'
                                nextClick={this.onSaveClick}
                            />
                        </>)
                    }
                ]}
            />
            <SyModal
                changeStateTag={(rowData) => this.setState({ khyhmd1: false })}
                visible={this.state.khyhmd1}
            >
                <SYLxSearch
                    url={API_PATH.GET_HFB_JBKHYHCX}
                    placeholder='银行编码/银行名称'
                    searchKey='mc'
                    onCancel={(rowData) => this.setState({ khyhmd1: false })}
                    onSubmit={rowData => this.handleKhyh1(rowData)}
                    params={{}}
                    span={(rowData, sectionID, rowID) => {
                        return (<span style={{ fontSize: '0.75rem' }}>{rowData.bm} | {rowData.mc}</span>)
                    }}
                />
            </SyModal>
            <SyModal
                changeStateTag={(rowData) => this.setState({ khyhmd2: false })}
                visible={this.state.khyhmd2}
            >
                <SYLxSearch
                    url={API_PATH.GET_HFB_JBKHYHCX}
                    placeholder='银行编码/银行名称'
                    searchKey='mc'
                    onCancel={(rowData) => this.setState({ khyhmd2: false })}
                    onSubmit={(rowData) => this.handleKhyh2(rowData)}
                    params={{}}
                    span={(rowData, sectionID, rowID) => {
                        return (<span style={{ fontSize: '0.75rem' }}>{rowData.bm} | {rowData.mc}</span>)
                    }}
                />
            </SyModal>
        </div>)
    }
}
const DbgsaddForm = createForm()(Dbgsadd)
export default DbgsaddForm

























