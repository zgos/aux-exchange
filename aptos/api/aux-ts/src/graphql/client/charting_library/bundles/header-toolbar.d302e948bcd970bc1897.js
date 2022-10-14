;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [3005],
  {
    86043: (e) => {
      e.exports = {
        group: 'group-3uonVBsm',
        noLeftDecoration: 'noLeftDecoration-3uonVBsm',
        noRightDecoration: 'noRightDecoration-3uonVBsm',
        noMinimalWidth: 'noMinimalWidth-3uonVBsm',
        newStyles: 'newStyles-3uonVBsm',
        separator: 'separator-3uonVBsm',
        separatorWrap: 'separatorWrap-3uonVBsm'
      }
    },
    50652: (e) => {
      e.exports = {
        'css-value-header-toolbar-height': '38px',
        wrap: 'wrap-1ETeWwz2'
      }
    },
    56952: (e) => {
      e.exports = {
        'css-value-header-toolbar-height': '38px',
        toolbar: 'toolbar-LZaMRgb9',
        isHidden: 'isHidden-LZaMRgb9',
        overflowWrap: 'overflowWrap-LZaMRgb9',
        customButton: 'customButton-LZaMRgb9',
        hovered: 'hovered-LZaMRgb9'
      }
    },
    17822: (e) => {
      e.exports = { wrap: 'wrap-35jKyg6w', icon: 'icon-35jKyg6w' }
    },
    29295: (e) => {
      e.exports = {
        'css-value-header-toolbar-height': '38px',
        inner: 'inner-i5o9yNmy',
        fake: 'fake-i5o9yNmy',
        fill: 'fill-i5o9yNmy',
        collapse: 'collapse-i5o9yNmy',
        button: 'button-i5o9yNmy',
        iconButton: 'iconButton-i5o9yNmy',
        hidden: 'hidden-i5o9yNmy',
        content: 'content-i5o9yNmy',
        desktopPublish: 'desktopPublish-i5o9yNmy',
        mobilePublish: 'mobilePublish-i5o9yNmy'
      }
    },
    49775: (e, t, a) => {
      'use strict'
      a.d(t, { Icon: () => r })
      var s = a(67294)
      const r = s.forwardRef((e, t) => {
        const { icon: a = '', ...r } = e
        return s.createElement('span', {
          ...r,
          ref: t,
          dangerouslySetInnerHTML: { __html: a }
        })
      })
    },
    24084: (e, t, a) => {
      'use strict'
      a.d(t, { INTERVALS: () => r })
      var s = a(79881)
      const r = [
        { name: '', label: (0, s.t)('minutes', { context: 'interval' }) },
        { name: 'H', label: (0, s.t)('hours', { context: 'interval' }) },
        { name: 'D', label: (0, s.t)('days', { context: 'interval' }) },
        { name: 'W', label: (0, s.t)('weeks', { context: 'interval' }) },
        { name: 'M', label: (0, s.t)('months', { context: 'interval' }) }
      ]
    },
    48186: (e, t, a) => {
      'use strict'
      a.r(t), a.d(t, { HeaderToolbarRenderer: () => ge })
      var s = a(67294),
        r = a(73935),
        n = a(16282),
        i = a(94184),
        o = a(94795),
        l = a.n(o),
        d = a(58848),
        c = a(27490),
        h = a(18437),
        u = a(45697),
        m = a(5383),
        v = a(96404),
        p = a(87230),
        y = a(19470),
        S = a(86043)
      function g(e) {
        const {
          children: t,
          className: a,
          noLeftDecoration: r,
          noRightDecoration: n,
          noMinimalWidth: o,
          onClick: l,
          removeSeparator: d
        } = e
        return s.createElement(
          s.Fragment,
          null,
          y.hasNewHeaderToolbarStyles &&
            !d &&
            s.createElement(
              'div',
              { className: S.separatorWrap },
              s.createElement('div', { className: S.separator })
            ),
          s.createElement(
            'div',
            {
              className: i(a, S.group, {
                [S.noMinimalWidth]: o,
                [S.noLeftDecoration]: r,
                [S.noRightDecoration]: n,
                [S.newStyles]: y.hasNewHeaderToolbarStyles
              }),
              onClick: l
            },
            t
          )
        )
      }
      var f = a(50652)
      class b extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._handleMeasure = ({ width: e }) => {
              this.props.onWidthChange(e)
            })
        }
        render() {
          const { children: e, shouldMeasure: t } = this.props
          return s.createElement(
            m,
            {
              shouldMeasure: t,
              onMeasure: this._handleMeasure,
              whitelist: ['width']
            },
            s.createElement('div', { className: f.wrap }, e)
          )
        }
      }
      var E = a(79881),
        _ = a(49775),
        C = a(17822),
        w = a(49017)
      const M = { text: (0, E.t)('View Only Mode') }
      function I(e) {
        return s.createElement(
          'div',
          { className: C.wrap },
          s.createElement(_.Icon, { className: C.icon, icon: w }),
          M.text
        )
      }
      var k,
        R = a(52444),
        F = a(39197)
      !(function (e) {
        ;(e.SymbolSearch = 'header-toolbar-symbol-search'),
          (e.Intervals = 'header-toolbar-intervals'),
          (e.ChartStyles = 'header-toolbar-chart-styles'),
          (e.Compare = 'header-toolbar-compare'),
          (e.Indicators = 'header-toolbar-indicators'),
          (e.StudyTemplates = 'header-toolbar-study-templates'),
          (e.Dropdown = 'header-toolbar-dropdown'),
          (e.Alerts = 'header-toolbar-alerts'),
          (e.Layouts = 'header-toolbar-layouts'),
          (e.SaveLoad = 'header-toolbar-save-load'),
          (e.UndoRedo = 'header-toolbar-undo-redo'),
          (e.Properties = 'header-toolbar-properties'),
          (e.PublishDesktop = 'header-toolbar-publish-desktop'),
          (e.PublishMobile = 'header-toolbar-publish-mobile'),
          (e.Fullscreen = 'header-toolbar-fullscreen'),
          (e.Screenshot = 'header-toolbar-screenshot'),
          (e.Replay = 'header-toolbar-replay'),
          (e.Financials = 'header-toolbar-financials'),
          (e.StartTrial = 'header-toolbar-start-trial')
      })(k || (k = {}))
      var T = a(11086),
        N = a(53178),
        W = a(29295)
      const V = (0, N.registryContextType)()
      class A extends s.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._handleMouseOver = (e) => {
              ;(0, T.hoverMouseEventFilter)(e) &&
                this.setState({ isHovered: !0 })
            }),
            (this._handleMouseOut = (e) => {
              ;(0, T.hoverMouseEventFilter)(e) &&
                this.setState({ isHovered: !1 })
            }),
            (this._handleInnerResize = (e) => {
              const { onWidthChange: t } = this.props
              t && t(e)
            }),
            (this._handleMeasureAvailableSpace = ({ width: e }) => {
              const { onAvailableSpaceChange: t } = this.props
              t && t(e)
            }),
            (this._processCustoms = (e) => {
              const { isFake: t, displayMode: a } = this.props,
                { tools: r } = this.context
              return e.map((e) =>
                s.createElement(
                  g,
                  { key: e.id },
                  'Button' === e.type
                    ? s.createElement(r.Custom, { ...e.params, isFake: t })
                    : s.createElement(r.Dropdown, {
                        displayMode: a,
                        params: e.params
                      })
                )
              )
            }),
            (this._fixLastGroup = (e, t, a) => {
              if (t === a.length - 1 && s.isValidElement(e) && e.type === g) {
                const t =
                  void 0 !== this.context.tools.Publish && !this.props.readOnly
                return s.cloneElement(e, { noRightDecoration: t })
              }
              return e
            }),
            (0, N.validateRegistry)(t, { tools: u.any.isRequired }),
            (this.state = { isHovered: !1, isAuthenticated: void 0 })
        }
        componentDidMount() {
          0
        }
        componentWillUnmount() {
          0
        }
        render() {
          const { tools: e } = this.context,
            {
              features: t,
              displayMode: a,
              chartSaver: r,
              studyMarket: n,
              readOnly: o,
              saveLoadSyncEmitter: l,
              leftCustomElements: d,
              rightCustomElements: c,
              showScrollbarWhen: h,
              isFake: u = !1
            } = this.props,
            { isHovered: S, isAuthenticated: f } = this.state,
            E = this._processCustoms(d),
            _ = this._processCustoms(c),
            C = h.includes(a)
          return s.createElement(
            'div',
            {
              className: i(W.inner, { [W.fake]: u }),
              onContextMenu: F.preventDefaultForContextMenu,
              'data-is-fake-main-panel': u
            },
            s.createElement(
              m,
              {
                onMeasure: this._handleMeasureAvailableSpace,
                whitelist: ['width'],
                shouldMeasure: !u
              },
              s.createElement(
                R.HorizontalScroll,
                {
                  isVisibleFade: v.mobiletouch && C,
                  isVisibleButtons: !v.mobiletouch && C && S,
                  isVisibleScrollbar: !1,
                  shouldMeasure: C && !u,
                  onMouseOver: this._handleMouseOver,
                  onMouseOut: this._handleMouseOut
                },
                s.createElement(
                  'div',
                  { className: W.content },
                  s.createElement(
                    b,
                    {
                      onWidthChange: this._handleInnerResize,
                      shouldMeasure: u
                    },
                    s.createElement(
                      p.FragmentMap,
                      { map: this._fixLastGroup },
                      !o &&
                        s.Children.toArray([
                          e.SymbolSearch &&
                            s.createElement(
                              g,
                              { key: 'symbol' },
                              s.createElement(e.SymbolSearch, {
                                id: u ? void 0 : k.SymbolSearch,
                                isActionsVisible: t.allowSymbolSearchSpread
                              }),
                              y.hasNewHeaderToolbarStyles &&
                                e.Compare &&
                                s.createElement(e.Compare, {
                                  id: u ? void 0 : k.Compare,
                                  className: W.button,
                                  displayMode: a
                                })
                            ),
                          e.DateRange &&
                            s.createElement(
                              g,
                              { key: 'range' },
                              s.createElement(e.DateRange, null)
                            ),
                          e.Intervals &&
                            s.createElement(
                              g,
                              { key: 'intervals' },
                              s.createElement(e.Intervals, {
                                id: u ? void 0 : k.Intervals,
                                isShownQuicks: t.allowFavoriting,
                                isFavoritingAllowed: t.allowFavoriting,
                                displayMode: a,
                                isFake: u
                              })
                            ),
                          e.Bars &&
                            s.createElement(
                              g,
                              { key: 'styles' },
                              s.createElement(e.Bars, {
                                id: u ? void 0 : k.ChartStyles,
                                isShownQuicks: t.allowFavoriting,
                                isFavoritingAllowed: t.allowFavoriting,
                                displayMode: a,
                                isFake: u
                              })
                            ),
                          !y.hasNewHeaderToolbarStyles &&
                            e.Compare &&
                            s.createElement(
                              g,
                              { key: 'compare' },
                              s.createElement(e.Compare, {
                                id: u ? void 0 : k.Compare,
                                className: W.button,
                                displayMode: a
                              })
                            ),
                          e.Indicators &&
                            s.createElement(
                              g,
                              { key: 'indicators' },
                              s.createElement(e.Indicators, {
                                id: u ? void 0 : k.Indicators,
                                className: W.button,
                                studyMarket: n,
                                displayMode: a,
                                isFake: u,
                                isAuthenticated: f
                              }),
                              y.hasNewHeaderToolbarStyles &&
                                e.Templates &&
                                s.createElement(e.Templates, {
                                  id: u ? void 0 : k.StudyTemplates,
                                  isShownQuicks: t.allowFavoriting,
                                  isFavoritingAllowed: t.allowFavoriting,
                                  displayMode: a
                                })
                            ),
                          e.Financials &&
                            s.createElement(
                              g,
                              { key: 'financials' },
                              s.createElement(e.Financials, {
                                id: u ? void 0 : k.Financials,
                                className: W.button,
                                displayMode: a
                              })
                            ),
                          !y.hasNewHeaderToolbarStyles &&
                            e.Templates &&
                            s.createElement(
                              g,
                              { key: 'templates' },
                              s.createElement(e.Templates, {
                                id: u ? void 0 : k.StudyTemplates,
                                isShownQuicks: t.allowFavoriting,
                                isFavoritingAllowed: t.allowFavoriting,
                                displayMode: a
                              })
                            ),
                          e.Alert &&
                            s.createElement(
                              g,
                              { key: 'alert' },
                              s.createElement(e.Alert, {
                                id: u ? void 0 : k.Alerts,
                                className: W.button,
                                displayMode: a
                              }),
                              y.hasNewHeaderToolbarStyles &&
                                e.Replay &&
                                s.createElement(e.Replay, {
                                  id: u ? void 0 : k.Replay,
                                  className: W.button,
                                  displayMode: a
                                })
                            ),
                          e.AlertReferral &&
                            s.createElement(
                              g,
                              { key: 'alert-referral' },
                              s.createElement(e.AlertReferral, {
                                className: W.button,
                                displayMode: a
                              })
                            ),
                          !y.hasNewHeaderToolbarStyles &&
                            e.Replay &&
                            s.createElement(
                              g,
                              { key: 'replay' },
                              s.createElement(e.Replay, {
                                id: u ? void 0 : k.Replay,
                                className: W.button,
                                displayMode: a
                              })
                            ),
                          !y.hasNewHeaderToolbarStyles &&
                            e.UndoRedo &&
                            s.createElement(
                              g,
                              { key: 'undo-redo' },
                              s.createElement(e.UndoRedo, {
                                id: u ? void 0 : k.UndoRedo
                              })
                            ),
                          e.ScalePercentage &&
                            s.createElement(
                              g,
                              { key: 'percentage' },
                              s.createElement(e.ScalePercentage, null)
                            ),
                          e.ScaleLogarithm &&
                            s.createElement(
                              g,
                              { key: 'logarithm' },
                              s.createElement(e.ScaleLogarithm, null)
                            ),
                          ...E
                        ]),
                      (function (e) {
                        const t = e.findIndex(
                          (e) =>
                            s.isValidElement(e) &&
                            !!e.key &&
                            -1 !== e.key.toString().indexOf('view-only-badge')
                        )
                        return (
                          [t]
                            .filter((e) => e >= 0)
                            .forEach((t) => {
                              e = s.Children.map(e, (e, a) => {
                                if (s.isValidElement(e)) {
                                  switch ([t - 1, t, t + 1].indexOf(a)) {
                                    case 0:
                                      const t = { noRightDecoration: !0 }
                                      e = s.cloneElement(e, t)
                                      break
                                    case 1:
                                      const a = {
                                        noLeftDecoration: !0,
                                        noRightDecoration: !0
                                      }
                                      e = s.cloneElement(e, a)
                                      break
                                    case 2:
                                      const r = { noLeftDecoration: !0 }
                                      e = s.cloneElement(e, r)
                                  }
                                }
                                return e
                              })
                            }),
                          e
                        )
                      })(
                        s.Children.toArray([
                          o &&
                            s.createElement(
                              g,
                              {
                                key: 'view-only-badge',
                                removeSeparator: y.hasNewHeaderToolbarStyles
                              },
                              s.createElement(I, null)
                            ),
                          s.createElement(g, {
                            key: 'gap',
                            className: i(W.fill, u && W.collapse),
                            removeSeparator: y.hasNewHeaderToolbarStyles
                          }),
                          y.hasNewHeaderToolbarStyles &&
                            !o &&
                            e.UndoRedo &&
                            s.createElement(
                              g,
                              { key: 'undo-redo', removeSeparator: !0 },
                              s.createElement(e.UndoRedo, {
                                id: u ? void 0 : k.UndoRedo
                              })
                            ),
                          (!o || y.hasNewHeaderToolbarStyles) &&
                            e.Layout &&
                            s.createElement(
                              g,
                              {
                                key: 'layout',
                                removeSeparator:
                                  y.hasNewHeaderToolbarStyles && o
                              },
                              !o &&
                                s.createElement(e.Layout, {
                                  id: u ? void 0 : k.Layouts
                                }),
                              y.hasNewHeaderToolbarStyles &&
                                e.SaveLoad &&
                                s.createElement(e.SaveLoad, {
                                  id: u ? void 0 : k.SaveLoad,
                                  chartSaver: r,
                                  isReadOnly: o,
                                  displayMode: a,
                                  isFake: u,
                                  stateSyncEmitter: l
                                })
                            ),
                          !y.hasNewHeaderToolbarStyles &&
                            e.SaveLoad &&
                            s.createElement(
                              g,
                              { key: 'save-load-right' },
                              s.createElement(e.SaveLoad, {
                                id: u ? void 0 : k.SaveLoad,
                                chartSaver: r,
                                isReadOnly: o,
                                displayMode: a,
                                isFake: u,
                                stateSyncEmitter: l
                              })
                            ),
                          e.SaveLoadReferral &&
                            s.createElement(
                              g,
                              { key: 'save-load-referral' },
                              s.createElement(e.SaveLoadReferral, {
                                isReadOnly: o,
                                displayMode: a
                              })
                            ),
                          t.showLaunchInPopupButton &&
                            e.OpenPopup &&
                            s.createElement(
                              g,
                              { key: 'popup' },
                              s.createElement(e.OpenPopup, null)
                            ),
                          (!o || y.hasNewHeaderToolbarStyles) &&
                            e.Properties &&
                            s.createElement(
                              g,
                              {
                                key: 'properties',
                                removeSeparator:
                                  y.hasNewHeaderToolbarStyles && o
                              },
                              !o &&
                                s.createElement(e.Properties, {
                                  id: u ? void 0 : k.Properties,
                                  className: W.iconButton
                                }),
                              y.hasNewHeaderToolbarStyles &&
                                s.createElement(
                                  s.Fragment,
                                  null,
                                  !o &&
                                    e.Fullscreen &&
                                    s.createElement(e.Fullscreen, {
                                      id: u ? void 0 : k.Fullscreen
                                    }),
                                  e.Screenshot &&
                                    s.createElement(e.Screenshot, {
                                      id: u ? void 0 : k.Screenshot,
                                      className: W.iconButton
                                    })
                                )
                            ),
                          !y.hasNewHeaderToolbarStyles &&
                            !o &&
                            e.Fullscreen &&
                            s.createElement(
                              g,
                              {
                                key: 'fullscreen',
                                onClick: this._trackFullscreenButtonClick
                              },
                              s.createElement(e.Fullscreen, {
                                id: u ? void 0 : k.Fullscreen
                              })
                            ),
                          !y.hasNewHeaderToolbarStyles &&
                            e.Screenshot &&
                            s.createElement(
                              g,
                              { key: 'screenshot' },
                              s.createElement(e.Screenshot, {
                                id: u ? void 0 : k.Screenshot,
                                className: W.iconButton
                              })
                            ),
                          !o &&
                            e.Publish &&
                            s.createElement(
                              g,
                              {
                                key: 'publish',
                                className: W.mobilePublish,
                                removeSeparator: y.hasNewHeaderToolbarStyles
                              },
                              s.createElement(e.Publish, {
                                id: u ? void 0 : k.PublishMobile
                              })
                            ),
                          ..._
                        ])
                      )
                    )
                  )
                )
              )
            ),
            e.Publish &&
              !o &&
              !u &&
              s.createElement(e.Publish, {
                id: k.PublishDesktop,
                className: W.desktopPublish
              })
          )
        }
        _onLoginStateChange() {
          0
        }
        _trackFullscreenButtonClick() {
          0
        }
      }
      A.contextType = V
      var H = a(32856),
        D = a.n(H),
        L = a(24261)
      class x extends L.CommonJsonStoreService {
        constructor(e, t, a = []) {
          super(e, t, 'FAVORITE_CHART_STYLES_CHANGED', 'StyleWidget.quicks', a)
        }
      }
      var P = a(1467),
        B = a(4334)
      class O extends L.AbstractJsonStoreService {
        constructor(e, t, a) {
          super(e, t, 'FAVORITE_INTERVALS_CHANGED', 'IntervalWidget.quicks', a)
        }
        _serialize(e) {
          return (0, B.uniq)(e.map(P.normalizeIntervalString))
        }
        _deserialize(e) {
          return (0, B.uniq)(
            (0, P.convertResolutionsFromSettings)(e)
              .filter(P.isResolutionMultiplierValid)
              .map(P.normalizeIntervalString)
          )
        }
      }
      var z = a(24287),
        U = a(5729),
        X = a.n(U),
        K = a(64222),
        q = a(2308)
      class G extends L.AbstractJsonStoreService {
        constructor(e, t, a = []) {
          super(e, t, 'CUSTOM_INTERVALS_CHANGED', 'IntervalWidget.intervals', a)
        }
        set(e, t) {
          e.length, this.get().length, super.set(e, t)
        }
        _serialize(e) {
          return (0, B.uniq)(e.map(P.normalizeIntervalString))
        }
        _deserialize(e) {
          return (0, B.uniq)(
            (0, P.convertResolutionsFromSettings)(e)
              .filter(P.isResolutionMultiplierValid)
              .map(P.normalizeIntervalString)
          )
        }
      }
      const J = new G(q.TVXWindowEvents, K)
      var j = a(24084)
      class Z {
        constructor(e) {
          ;(this._customIntervalsService = J),
            (this._supportedIntervalsMayChange = new (X())()),
            (this._fireSupportedIntervalsMayChange = () => {
              this._supportedIntervalsMayChange.fire()
            }),
            (this._chartApiInstance = e),
            z.linking.supportedResolutions.subscribe(
              this._fireSupportedIntervalsMayChange
            ),
            z.linking.range.subscribe(this._fireSupportedIntervalsMayChange),
            z.linking.seconds.subscribe(this._fireSupportedIntervalsMayChange),
            z.linking.ticks.subscribe(this._fireSupportedIntervalsMayChange),
            z.linking.intraday.subscribe(this._fireSupportedIntervalsMayChange)
        }
        destroy() {
          z.linking.supportedResolutions.unsubscribe(
            this._fireSupportedIntervalsMayChange
          ),
            z.linking.range.unsubscribe(this._fireSupportedIntervalsMayChange),
            z.linking.seconds.unsubscribe(
              this._fireSupportedIntervalsMayChange
            ),
            z.linking.ticks.unsubscribe(this._fireSupportedIntervalsMayChange),
            z.linking.intraday.unsubscribe(
              this._fireSupportedIntervalsMayChange
            )
        }
        getDefaultIntervals() {
          return null === this._chartApiInstance
            ? []
            : this._chartApiInstance
                .defaultResolutions()
                .map(P.normalizeIntervalString)
        }
        getCustomIntervals() {
          return this._customIntervalsService.get()
        }
        add(e, t, a) {
          if (!this.isValidInterval(e, t)) return null
          const s = (0, P.normalizeIntervalString)(`${e}${t}`),
            r = this.getCustomIntervals()
          return this._isIntervalDefault(s) || r.includes(s)
            ? null
            : (this._customIntervalsService.set(
                (0, P.sortResolutions)([...r, s])
              ),
              s)
        }
        remove(e) {
          this._customIntervalsService.set(
            this.getCustomIntervals().filter((t) => t !== e)
          )
        }
        isValidInterval(e, t) {
          return (0, P.isResolutionMultiplierValid)(`${e}${t}`)
        }
        isSupportedInterval(e) {
          return (0, P.isAvailable)(e)
        }
        supportedIntervalsMayChange() {
          return this._supportedIntervalsMayChange
        }
        getOnChange() {
          return this._customIntervalsService.getOnChange()
        }
        getPossibleIntervals() {
          return j.INTERVALS
        }
        getResolutionUtils() {
          return {
            getMaxResolutionValue: P.getMaxResolutionValue,
            getTranslatedResolutionModel: P.getTranslatedResolutionModel,
            mergeResolutions: P.mergeResolutions,
            sortResolutions: P.sortResolutions
          }
        }
        _isIntervalDefault(e) {
          return this.getDefaultIntervals().includes(e)
        }
      }
      var $ = a(6535),
        Q = a(345),
        Y = a(36413)
      const ee = {}
      let te = null
      class ae {
        constructor(e = K) {
          ;(this._favorites = []),
            (this._favoritesChanged = new (X())()),
            (this._settings = e),
            q.TVXWindowEvents.on('StudyFavoritesChanged', (e) => {
              const t = JSON.parse(e)
              this._loadFromState(t.favorites || [])
            }),
            this._settings.onSync.subscribe(this, this._loadFavs),
            this._loadFavs()
        }
        isFav(e) {
          const t = this.favId(e)
          return -1 !== this._findFavIndex(t)
        }
        toggleFavorite(e) {
          this.isFav(e) ? this.removeFavorite(e) : this.addFavorite(e)
        }
        addFavorite(e) {
          const t = this.favId(e)
          this._favorites.push(re(t)),
            this._favoritesChanged.fire(),
            this._saveFavs()
        }
        removeFavorite(e) {
          const t = this.favId(e),
            a = this._findFavIndex(t)
          ;-1 !== a &&
            (this._favorites.splice(a, 1), this._favoritesChanged.fire()),
            this._saveFavs()
        }
        favId(e) {
          return (0, Y.isPineIdString)(e)
            ? e
            : (0, Y.extractPineId)(e) || (0, Q.extractStudyId)(e)
        }
        favorites() {
          return this._favorites
        }
        favoritePineIds() {
          return this._favorites
            .filter((e) => 'pine' === e.type)
            .map((e) => e.pineId)
        }
        favoritesChanged() {
          return this._favoritesChanged
        }
        static getInstance() {
          return null === te && (te = new ae()), te
        }
        static create(e) {
          return new ae(e)
        }
        _loadFavs() {
          const e = this._settings.getJSON('studyMarket.favorites', [])
          this._loadFromState(e)
        }
        _saveFavs() {
          const e = this._stateToSave()
          this._settings.setJSON('studyMarket.favorites', e),
            q.TVXWindowEvents.emit(
              'StudyFavoritesChanged',
              JSON.stringify({ favorites: e })
            )
        }
        _stateToSave() {
          return this._favorites.map(se)
        }
        _loadFromState(e) {
          ;(this._favorites = e.map((e) =>
            re(
              (function (e) {
                return e in ee ? ee[e] : e
              })(e)
            )
          )),
            this._favoritesChanged.fire()
        }
        _findFavIndex(e) {
          return this._favorites.findIndex((t) => e === se(t))
        }
      }
      function se(e) {
        return 'java' === e.type ? e.studyId : e.pineId
      }
      function re(e) {
        return (0, Y.isPineIdString)(e)
          ? { type: 'pine', pineId: e }
          : { type: 'java', studyId: e }
      }
      var ne = a(35001)
      const ie = {
        [ne.ResolutionKind.Ticks]: !1,
        [ne.ResolutionKind.Seconds]: !1,
        [ne.ResolutionKind.Minutes]: !1,
        [ne.SpecialResolutionKind.Hours]: !1,
        [ne.ResolutionKind.Days]: !1,
        [ne.ResolutionKind.Range]: !1
      }
      class oe extends L.CommonJsonStoreService {
        constructor(e, t, a = ie) {
          super(
            e,
            t,
            'INTERVALS_MENU_VIEW_STATE_CHANGED',
            'IntervalWidget.menu.viewState',
            a
          )
        }
        isAllowed(e) {
          return Object.keys(ie).includes(e)
        }
      }
      var le = a(62685)
      const de = {
          Area: 3,
          Bars: 0,
          Candles: 1,
          'Heiken Ashi': 8,
          'Hollow Candles': 9,
          Line: 2,
          Renko: 4,
          Kagi: 5,
          'Point & figure': 6,
          'Line Break': 7,
          Baseline: 10
        },
        ce = ['1', '30', '60']
      function he(e = []) {
        let t = e.map((e) => de[e]) || [1, 4, 5, 6]
        return c.enabled('widget') && (t = [0, 1, 3]), t
      }
      function ue(e = []) {
        return (0, P.mergeResolutions)(
          e,
          c.enabled('star_some_intervals_by_default') ? ce : []
        )
      }
      new O(q.TVXWindowEvents, K, ue()),
        new x(q.TVXWindowEvents, K, he()),
        new le.FavoriteStudyTemplateService(q.TVXWindowEvents, K)
      const me = {
        tools: u.any.isRequired,
        isFundamental: u.any,
        chartApiInstance: u.any,
        availableTimeFrames: u.any,
        chartWidgetCollection: u.any,
        windowMessageService: u.any,
        favoriteChartStylesService: u.any,
        favoriteIntervalsService: u.any,
        intervalService: u.any,
        favoriteStudyTemplatesService: u.any,
        studyTemplates: u.any,
        chartChangesWatcher: u.any,
        saveChartService: u.any,
        sharingChartService: u.any,
        loadChartService: u.any,
        chartWidget: u.any,
        favoriteScriptsModel: u.any,
        intervalsMenuViewStateService: u.any,
        templatesMenuViewStateService: u.any,
        financialsDialogController: u.any,
        snapshotUrl: u.any
      }
      var ve = a(67235),
        pe = a(56952)
      const ye = []
      class Se extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._saveLoadSyncEmitter = new (l())()),
            (this._handleFullWidthChange = (e) => {
              ;(this._fullWidth = e), this.setState({ measureValid: !1 })
            }),
            (this._handleFavoritesWidthChange = (e) => {
              ;(this._favoritesWidth = e), this.setState({ measureValid: !1 })
            }),
            (this._handleCollapseWidthChange = (e) => {
              ;(this._collapseWidth = e), this.setState({ measureValid: !1 })
            }),
            (this._handleMeasure = (e) => {
              this.setState({ availableWidth: e, measureValid: !1 })
            })
          const {
            tools: t,
            windowMessageService: a,
            chartWidgetCollection: s,
            chartApiInstance: r,
            availableTimeFrames: i,
            isFundamental: o,
            favoriteIntervalsService: h,
            favoriteChartStylesService: u,
            favoriteStudyTemplatesService: m,
            studyTemplates: v,
            saveChartService: p,
            sharingChartService: y,
            loadChartService: S,
            financialsDialogController: g,
            snapshotUrl: f
          } = e
          ;(this._showScrollbarWhen = (0, n.ensureDefined)(
            e.allowedModes
          ).slice(-1)),
            (this._panelWidthChangeHandlers = {
              full: this._handleFullWidthChange,
              medium: this._handleFavoritesWidthChange,
              small: this._handleCollapseWidthChange
            })
          const { chartChangesWatcher: b } = e
          this._chartChangesWatcher = b
          const E = he(this.props.defaultFavoriteStyles)
          this._favoriteChartStylesService = u || new x(q.TVXWindowEvents, K, E)
          const _ = ue(this.props.defaultFavoriteIntervals)
          ;(this._favoriteIntervalsService =
            h || new O(q.TVXWindowEvents, K, _)),
            (this._intervalsMenuViewStateService = new oe(
              q.TVXWindowEvents,
              K
            )),
            (this._intervalService = new Z(r)),
            (this._registry = {
              tools: t,
              isFundamental: o,
              chartWidgetCollection: s,
              windowMessageService: a,
              chartApiInstance: r,
              availableTimeFrames: i,
              favoriteStudyTemplatesService: m,
              studyTemplates: v,
              saveChartService: p,
              sharingChartService: y,
              loadChartService: S,
              intervalsMenuViewStateService:
                this._intervalsMenuViewStateService,
              favoriteChartStylesService: this._favoriteChartStylesService,
              favoriteIntervalsService: this._favoriteIntervalsService,
              intervalService: this._intervalService,
              chartChangesWatcher: this._chartChangesWatcher,
              chartWidget: s.activeChartWidget.value(),
              favoriteScriptsModel: ae.getInstance(),
              templatesMenuViewStateService:
                this._templatesMenuVuewStateService,
              financialsDialogController: g,
              snapshotUrl: f
            }),
            (this.state = {
              isVisible: !0,
              availableWidth: 0,
              displayMode: 'full',
              measureValid: !1,
              leftCustomElements: [],
              rightCustomElements: []
            }),
            (this._readOnly = s.readOnly()),
            (this._features = {
              allowFavoriting: c.enabled('items_favoriting'),
              showIdeasButton: Boolean(this.props.ideas),
              showLaunchInPopupButton: Boolean(this.props.popupButton),
              allowSymbolSearchSpread:
                c.enabled('header_symbol_search') &&
                c.enabled('show_spread_operators'),
              allowToolbarHiding: c.enabled('collapsible_header')
            }),
            (this._setDisplayMode = (0, d.default)(this._setDisplayMode, 100)),
            this._negotiateResizer()
        }
        componentDidUpdate(e, t) {
          const { isVisible: a, measureValid: s } = this.state
          a !== t.isVisible &&
            (h.emit('toggle_header', a), this._negotiateResizer()),
            s || this._setDisplayMode()
        }
        render() {
          const { resizerBridge: e, allowedModes: t, ...a } = this.props,
            {
              displayMode: r,
              isVisible: o,
              leftCustomElements: l,
              rightCustomElements: d
            } = this.state,
            c = {
              features: this._features,
              readOnly: this._readOnly,
              isFake: !1,
              saveLoadSyncEmitter: this._saveLoadSyncEmitter,
              leftCustomElements: l,
              rightCustomElements: d,
              ...a
            },
            h = { ...c, isFake: !0, showScrollbarWhen: ye },
            u = (0, n.ensureDefined)(t),
            m = this.props.tools.PublishButtonManager || s.Fragment
          return s.createElement(
            N.RegistryProvider,
            { value: this._registry, validation: me },
            s.createElement(
              m,
              null,
              s.createElement(
                'div',
                {
                  className: i(pe.toolbar, { [pe.isHidden]: !o }),
                  onClick: this.props.onClick
                },
                s.createElement(
                  'div',
                  { className: pe.overflowWrap },
                  s.createElement(A, {
                    key: 'live',
                    showScrollbarWhen: this._showScrollbarWhen,
                    displayMode: r,
                    onAvailableSpaceChange: this._handleMeasure,
                    ...c
                  }),
                  u.map((e) =>
                    s.createElement(A, {
                      key: e,
                      displayMode: e,
                      onWidthChange: this._panelWidthChangeHandlers[e],
                      ...h
                    })
                  )
                )
              )
            )
          )
        }
        addButton(e, t = 'left') {
          const a = new (D())(0),
            s = (0, ve.parseHtmlElement)(
              `<div class="apply-common-tooltip ${pe.customButton}">`
            ),
            r = {
              type: 'Button',
              params: { key: Number(new Date()), element: s, width: a },
              id: e
            },
            { leftCustomElements: n, rightCustomElements: i } = this.state
          return (
            'left' === t
              ? this.setState({ leftCustomElements: [...n, r] })
              : this.setState({
                  rightCustomElements: [...i, r]
                }),
            s
          )
        }
        addDropdown(e, t) {
          const { leftCustomElements: a, rightCustomElements: s } = this.state,
            r = { type: 'Dropdown', id: e, params: t }
          'left' === t.align
            ? this.setState({ leftCustomElements: [...a, r] })
            : this.setState({ rightCustomElements: [...s, r] })
        }
        updateDropdown(e, t) {
          const a = (t) => 'Dropdown' === t.type && t.id === e,
            s =
              this.state.leftCustomElements.find(a) ||
              this.state.rightCustomElements.find(a)
          void 0 !== s &&
            ((s.params = { ...s.params, ...t }),
            this.setState({
              leftCustomElements: this.state.leftCustomElements.slice(),
              rightCustomElements: this.state.rightCustomElements.slice()
            }))
        }
        removeDropdown(e) {
          const t = (t) => 'Dropdown' === t.type && t.id !== e,
            a = this.state.leftCustomElements.filter(t),
            s = this.state.rightCustomElements.filter(t)
          this.setState({ leftCustomElements: a, rightCustomElements: s })
        }
        _negotiateResizer() {
          this.props.resizerBridge.negotiateHeight(
            this.state.isVisible
              ? $.HEADER_TOOLBAR_HEIGHT_EXPANDED
              : $.HEADER_TOOLBAR_HEIGHT_COLLAPSED
          )
        }
        _setDisplayMode() {
          const { availableWidth: e } = this.state,
            { allowedModes: t } = this.props,
            a = {
              full: this._fullWidth,
              medium: this._favoritesWidth,
              small: this._collapseWidth
            },
            s = (0, n.ensureDefined)(t)
          let r = s.map((e) => a[e]).findIndex((t) => e >= t)
          ;-1 === r && (r = s.length - 1)
          const i = s[r]
          this.setState({ measureValid: !0, displayMode: i })
        }
      }
      Se.defaultProps = { allowedModes: ['full', 'medium'] }
      class ge {
        constructor(e, t) {
          ;(this._component = null),
            (this._handleRef = (e) => {
              this._component = e
            }),
            (this._container = e),
            r.render(
              s.createElement(Se, { ...t, ref: this._handleRef }),
              this._container
            )
        }
        destroy() {
          r.unmountComponentAtNode(this._container)
        }
        getComponent() {
          return (0, n.ensureNotNull)(this._component)
        }
      }
    },
    19470: (e, t, a) => {
      'use strict'
      a.d(t, { hasNewHeaderToolbarStyles: () => s })
      a(27490)
      const s = !1
    },
    53178: (e, t, a) => {
      'use strict'
      a.d(t, {
        validateRegistry: () => o,
        RegistryProvider: () => l,
        registryContextType: () => d
      })
      var s = a(67294),
        r = a(45697),
        n = a.n(r)
      const i = s.createContext({})
      function o(e, t) {
        n().checkPropTypes(t, e, 'context', 'RegistryContext')
      }
      function l(e) {
        const { validation: t, value: a } = e
        return o(a, t), s.createElement(i.Provider, { value: a }, e.children)
      }
      function d() {
        return i
      }
    },
    87230: (e, t, a) => {
      'use strict'
      a.d(t, { FragmentMap: () => r })
      var s = a(67294)
      function r(e) {
        if (e.map) {
          return s.Children.toArray(e.children).map(e.map)
        }
        return e.children
      }
    },
    11086: (e, t, a) => {
      'use strict'
      a.d(t, {
        hoverMouseEventFilter: () => n,
        useAccurateHover: () => i,
        useHover: () => r
      })
      var s = a(67294)
      function r() {
        const [e, t] = (0, s.useState)(!1)
        return [
          e,
          {
            onMouseOver: function (e) {
              n(e) && t(!0)
            },
            onMouseOut: function (e) {
              n(e) && t(!1)
            }
          }
        ]
      }
      function n(e) {
        return !e.currentTarget.contains(e.relatedTarget)
      }
      function i(e) {
        const [t, a] = (0, s.useState)(!1)
        return (
          (0, s.useEffect)(() => {
            const t = (t) => {
              if (null === e.current) return
              const s = e.current.contains(t.target)
              a(s)
            }
            return (
              document.addEventListener('mouseover', t),
              () => document.removeEventListener('mouseover', t)
            )
          }, []),
          t
        )
      }
    },
    49017: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M4.56 14a10.05 10.05 0 00.52.91c.41.69 1.04 1.6 1.85 2.5C8.58 19.25 10.95 21 14 21c3.05 0 5.42-1.76 7.07-3.58A17.18 17.18 0 0023.44 14a9.47 9.47 0 00-.52-.91c-.41-.69-1.04-1.6-1.85-2.5C19.42 8.75 17.05 7 14 7c-3.05 0-5.42 1.76-7.07 3.58A17.18 17.18 0 004.56 14zM24 14l.45-.21-.01-.03a7.03 7.03 0 00-.16-.32c-.11-.2-.28-.51-.5-.87-.44-.72-1.1-1.69-1.97-2.65C20.08 7.99 17.45 6 14 6c-3.45 0-6.08 2-7.8 3.92a18.18 18.18 0 00-2.64 3.84v.02h-.01L4 14l-.45-.21-.1.21.1.21L4 14l-.45.21.01.03a5.85 5.85 0 00.16.32c.11.2.28.51.5.87.44.72 1.1 1.69 1.97 2.65C7.92 20.01 10.55 22 14 22c3.45 0 6.08-2 7.8-3.92a18.18 18.18 0 002.64-3.84v-.02h.01L24 14zm0 0l.45.21.1-.21-.1-.21L24 14zm-10-3a3 3 0 100 6 3 3 0 000-6zm-4 3a4 4 0 118 0 4 4 0 01-8 0z"/></svg>'
    }
  }
])
