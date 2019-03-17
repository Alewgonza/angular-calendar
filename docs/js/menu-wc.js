'use strict';



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

customElements.define('compodoc-menu', function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this.isNormalMode = _this.getAttribute('mode') === 'normal';
        return _this;
    }

    _createClass(_class, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.render(this.isNormalMode);
        }
    }, {
        key: 'render',
        value: function render(isNormalMode) {
            let tp = lithtml.html(
'<nav>\n    <ul class="list">\n        <li class="title">\n            \n                <a href="index.html" data-type="index-link">angular-calendar documentation</a>\n            \n        </li>\n\n        <li class="divider"></li>\n        ' + (isNormalMode ? '<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>' : '') + '\n        <li class="chapter">\n            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>\n            <ul class="links">\n                \n                    <li class="link">\n                        <a href="overview.html" data-type="chapter-link">\n                            <span class="icon ion-ios-keypad"></span>Overview\n                        </a>\n                    </li>\n                    <li class="link">\n                        <a href="index.html" data-type="chapter-link">\n                            <span class="icon ion-ios-paper"></span>README\n                        </a>\n                    </li>\n                \n                \n                    <li class="link">\n                        \n                            <a href="changelog.html"\n                        \n                        data-type="chapter-link">\n                            <span class="icon ion-ios-paper"></span>CHANGELOG\n                        </a>\n                    </li>\n                \n                    <li class="link">\n                        \n                            <a href="license.html"\n                        \n                        data-type="chapter-link">\n                            <span class="icon ion-ios-paper"></span>LICENSE\n                        </a>\n                    </li>\n                \n                \n                    <li class="link">\n                        <a href="dependencies.html"\n                            data-type="chapter-link">\n                            <span class="icon ion-ios-list"></span>Dependencies\n                        </a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        <li class="chapter modules">\n            <a data-type="chapter-link" href="modules.html">\n                <div class="menu-toggler linked" data-toggle="collapse"\n                    ' + (isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"') + '>\n                    <span class="icon ion-ios-archive"></span>\n                    <span class="link-name">Modules</span>\n                    <span class="icon ion-ios-arrow-down"></span>\n                </div>\n            </a>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"') + '>\n                \n                    <li class="link">\n                        <a href="modules/CalendarCommonModule.html" data-type="entity-link">CalendarCommonModule</a>\n                        \n                        \n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#directives-links-module-CalendarCommonModule-a0bb19444476f79efd9e0b5b5807a3bf"' : 'data-target="#xs-directives-links-module-CalendarCommonModule-a0bb19444476f79efd9e0b5b5807a3bf"') + '>\n                                    <span class="icon ion-md-code-working"></span>\n                                    <span>Directives</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="directives-links-module-CalendarCommonModule-a0bb19444476f79efd9e0b5b5807a3bf"' : 'id="xs-directives-links-module-CalendarCommonModule-a0bb19444476f79efd9e0b5b5807a3bf"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="directives/CalendarNextViewDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalendarNextViewDirective</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="directives/CalendarPreviousViewDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalendarPreviousViewDirective</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="directives/CalendarTodayDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalendarTodayDirective</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#pipes-links-module-CalendarCommonModule-a0bb19444476f79efd9e0b5b5807a3bf"' : 'data-target="#xs-pipes-links-module-CalendarCommonModule-a0bb19444476f79efd9e0b5b5807a3bf"') + '>\n                                    <span class="icon ion-md-add"></span>\n                                    <span>Pipes</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="pipes-links-module-CalendarCommonModule-a0bb19444476f79efd9e0b5b5807a3bf"' : 'id="xs-pipes-links-module-CalendarCommonModule-a0bb19444476f79efd9e0b5b5807a3bf"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="pipes/CalendarDatePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalendarDatePipe</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/CalendarDayModule.html" data-type="entity-link">CalendarDayModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-CalendarDayModule-38fd74308a8f03dd8505ce4731be040f"' : 'data-target="#xs-components-links-module-CalendarDayModule-38fd74308a8f03dd8505ce4731be040f"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-CalendarDayModule-38fd74308a8f03dd8505ce4731be040f"' : 'id="xs-components-links-module-CalendarDayModule-38fd74308a8f03dd8505ce4731be040f"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/CalendarDayViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalendarDayViewComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/CalendarModule.html" data-type="entity-link">CalendarModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/CalendarMonthModule.html" data-type="entity-link">CalendarMonthModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-CalendarMonthModule-bf492ce20a0732aaf6b81e1e0aec4d5f"' : 'data-target="#xs-components-links-module-CalendarMonthModule-bf492ce20a0732aaf6b81e1e0aec4d5f"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-CalendarMonthModule-bf492ce20a0732aaf6b81e1e0aec4d5f"' : 'id="xs-components-links-module-CalendarMonthModule-bf492ce20a0732aaf6b81e1e0aec4d5f"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/CalendarMonthViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalendarMonthViewComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/CalendarWeekModule.html" data-type="entity-link">CalendarWeekModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-CalendarWeekModule-ee35e7251eafdf8e96abdc08b1c64628"' : 'data-target="#xs-components-links-module-CalendarWeekModule-ee35e7251eafdf8e96abdc08b1c64628"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-CalendarWeekModule-ee35e7251eafdf8e96abdc08b1c64628"' : 'id="xs-components-links-module-CalendarWeekModule-ee35e7251eafdf8e96abdc08b1c64628"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/CalendarWeekViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalendarWeekViewComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n        \n        \n        \n            \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"') + '>\n                <span class="icon ion-ios-paper"></span>\n                <span>Classes</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"') + '>\n                \n                    <li class="link">\n                        <a href="classes/CalendarEventTitleFormatter.html" data-type="entity-link">CalendarEventTitleFormatter</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n                <li class="chapter">\n                    <div class="simple menu-toggler" data-toggle="collapse"\n                        ' + (isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"') + '>\n                        <span class="icon ion-md-arrow-round-down"></span>\n                        <span>Injectables</span>\n                        <span class="icon ion-ios-arrow-down"></span>\n                    </div>\n                    <ul class="links collapse"\n                    ' + (isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"') + '>\n                        \n                            <li class="link">\n                                <a href="injectables/CalendarDateFormatter.html" data-type="entity-link">CalendarDateFormatter</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/CalendarMomentDateFormatter.html" data-type="entity-link">CalendarMomentDateFormatter</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/CalendarNativeDateFormatter.html" data-type="entity-link">CalendarNativeDateFormatter</a>\n                            </li>\n                        \n                    </ul>\n                </li>\n            \n        \n        \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n                ' + (isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"') + '>\n                <span class="icon ion-md-information-circle-outline"></span>\n                <span>Interfaces</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"') + '>\n                \n                    <li class="link">\n                        <a href="interfaces/CalendarDateFormatterInterface.html" data-type="entity-link">CalendarDateFormatterInterface</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/CalendarDayViewBeforeRenderEvent.html" data-type="entity-link">CalendarDayViewBeforeRenderEvent</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/CalendarEventTimesChangedEvent.html" data-type="entity-link">CalendarEventTimesChangedEvent</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/CalendarModuleConfig.html" data-type="entity-link">CalendarModuleConfig</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/CalendarMonthViewBeforeRenderEvent.html" data-type="entity-link">CalendarMonthViewBeforeRenderEvent</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/CalendarMonthViewEventTimesChangedEvent.html" data-type="entity-link">CalendarMonthViewEventTimesChangedEvent</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/CalendarWeekViewBeforeRenderEvent.html" data-type="entity-link">CalendarWeekViewBeforeRenderEvent</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/DateFormatterParams.html" data-type="entity-link">DateFormatterParams</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/DayViewEventResize.html" data-type="entity-link">DayViewEventResize</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/WeekViewAllDayEventResize.html" data-type="entity-link">WeekViewAllDayEventResize</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"') + '>\n                <span class="icon ion-ios-cube"></span>\n                <span>Miscellaneous</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"') + '>\n                \n                    <li class="link">\n                      <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>\n                    </li>\n                \n                \n                \n                \n                    <li class="link">\n                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n        \n        \n        \n        \n        <li class="divider"></li>\n        <li class="copyright">\n                Documentation generated using <a href="https://compodoc.app/" target="_blank">\n                    \n                        \n                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">\n                        \n                    \n                </a>\n        </li>\n        \n    </ul>\n</nav>'
);
        this.innerHTML = tp.strings;
        }
    }]);

    return _class;
}(HTMLElement));