webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Player/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Player/index.tsx ***!
  \*****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-slider */ "./node_modules/rc-slider/es/index.js");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-slider/assets/index.css */ "./node_modules/rc-slider/assets/index.css");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/PlayerContext */ "./src/contexts/PlayerContext.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Player/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/convertDurationToTimeString */ "./src/utils/convertDurationToTimeString.ts");


var _jsxFileName = "C:\\Users\\Naiara Borges\\Documents\\C\xF3digos\\podcastrnext\\src\\components\\Player\\index.tsx",
    _s = $RefreshSig$();








function Player() {
  _s();

  var _episode$duration;

  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      progress = _useState[0],
      setProgress = _useState[1];

  var _usePlayer = Object(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__["usePlayer"])(),
      episodeList = _usePlayer.episodeList,
      currentEpisodeIndex = _usePlayer.currentEpisodeIndex,
      isPlaying = _usePlayer.isPlaying,
      isLooping = _usePlayer.isLooping,
      isShuffling = _usePlayer.isShuffling,
      togglePlay = _usePlayer.togglePlay,
      toggleLoop = _usePlayer.toggleLoop,
      toggleShuffle = _usePlayer.toggleShuffle,
      setPlayingState = _usePlayer.setPlayingState,
      playNext = _usePlayer.playNext,
      playPrevious = _usePlayer.playPrevious,
      hasNext = _usePlayer.hasNext,
      hasPrevious = _usePlayer.hasPrevious,
      clearPlayerState = _usePlayer.clearPlayerState;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  function setupProgressListener() {
    audioRef.current.currentTime = 0;
    audioRef.current.addEventListener('timeupdate', function () {
      setProgress(Math.floor(audioRef.current.currentTime));
    });
  }

  function handleSeek(amount) {
    audioRef.current.currentTime = amount;
    setProgress(amount);
  }

  function handleEpisodeEnded() {
    if (hasNext) {
      playNext();
    } else {
      clearPlayerState();
    }
  }

  var episode = episodeList[currentEpisodeIndex];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.playerContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "img/playing.svg",
        alt: "Tocando agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Tocando agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 12
    }, this), episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.currentEpisode,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
        width: 592,
        height: 592,
        src: episode === null || episode === void 0 ? void 0 : episode.thumbnail,
        objectFit: "cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 20
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: episode.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.members
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 16
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.emptyPlayer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Selecione um podcast para ouvir"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: !episode ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.empty : '',
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.progress,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: Object(_utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__["convertDurationToTimeString"])(progress)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 16
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.slider,
          children: episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(rc_slider__WEBPACK_IMPORTED_MODULE_3__["default"], {
            max: episode.duration,
            value: progress,
            onChange: handleSeek,
            trackStyle: {
              backgroundColor: '#04d361'
            },
            railStyle: {
              backgroundColor: '#9f75ff'
            },
            handleStyle: {
              borderColor: '#04d361',
              borderWidth: 4
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 28
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.emptySlider
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 20
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: Object(_utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__["convertDurationToTimeString"])((_episode$duration = episode === null || episode === void 0 ? void 0 : episode.duration) !== null && _episode$duration !== void 0 ? _episode$duration : 0)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 20
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 16
      }, this), episode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("audio", {
        src: episode.url,
        ref: audioRef,
        loop: isLooping,
        autoPlay: true,
        onEnded: handleEpisodeEnded,
        onPlay: function onPlay() {
          return setPlayingState(true);
        },
        onPause: function onPause() {
          return setPlayingState(false);
        },
        onLoadedMetadata: setupProgressListener
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 20
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.buttons,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          disabled: !episode || episodeList.length == 1,
          onClick: toggleShuffle,
          className: isShuffling ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.isActive : '',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/img/shuffle.svg",
            alt: "Embaralhar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 24
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 20
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          onClick: playPrevious,
          disabled: !episode || !hasPrevious,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/img/play-previous.svg",
            alt: "Tocar anterior"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 24
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 20
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.playButton,
          disabled: !episode,
          onClick: togglePlay,
          children: isPlaying ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/img/pause.svg",
            alt: "Tocar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 26
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/img/play.svg",
            alt: "Tocar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 26
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 20
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          onClick: playNext,
          disabled: !episode || !hasNext,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/img/play-next.svg",
            alt: "Tocar pr\xF3xima"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 24
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 20
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          disabled: !episode,
          onClick: toggleLoop,
          className: isLooping ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.isActive : '',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/img/repeat.svg",
            alt: "Repetir"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 24
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 20
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 8
  }, this);
}

_s(Player, "SKz7vcy+D1Te+vR1mYuFJOQcijc=", false, function () {
  return [_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__["usePlayer"]];
});

_c = Player;

var _c;

$RefreshReg$(_c, "Player");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJhdWRpb1JlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInVzZVBsYXllciIsImVwaXNvZGVMaXN0IiwiY3VycmVudEVwaXNvZGVJbmRleCIsImlzUGxheWluZyIsImlzTG9vcGluZyIsImlzU2h1ZmZsaW5nIiwidG9nZ2xlUGxheSIsInRvZ2dsZUxvb3AiLCJ0b2dnbGVTaHVmZmxlIiwic2V0UGxheWluZ1N0YXRlIiwicGxheU5leHQiLCJwbGF5UHJldmlvdXMiLCJoYXNOZXh0IiwiaGFzUHJldmlvdXMiLCJjbGVhclBsYXllclN0YXRlIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInBsYXkiLCJwYXVzZSIsInNldHVwUHJvZ3Jlc3NMaXN0ZW5lciIsImN1cnJlbnRUaW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsIk1hdGgiLCJmbG9vciIsImhhbmRsZVNlZWsiLCJhbW91bnQiLCJoYW5kbGVFcGlzb2RlRW5kZWQiLCJlcGlzb2RlIiwic3R5bGVzIiwicGxheWVyQ29udGFpbmVyIiwiY3VycmVudEVwaXNvZGUiLCJ0aHVtYm5haWwiLCJ0aXRsZSIsIm1lbWJlcnMiLCJlbXB0eVBsYXllciIsImVtcHR5IiwiY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIiwic2xpZGVyIiwiZHVyYXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiZW1wdHlTbGlkZXIiLCJ1cmwiLCJidXR0b25zIiwibGVuZ3RoIiwiaXNBY3RpdmUiLCJwbGF5QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFDckIs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OGQ3NjA2MzUwMDQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNsaWRlciBmcm9tICdyYy1zbGlkZXInO1xyXG5cclxuaW1wb3J0ICdyYy1zbGlkZXIvYXNzZXRzL2luZGV4LmNzcyc7XHJcblxyXG5pbXBvcnQgeyB1c2VQbGF5ZXIgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9QbGF5ZXJDb250ZXh0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGxheWVyKCkge1xyXG4gICAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWY8SFRNTEF1ZGlvRWxlbWVudD4obnVsbCk7XHJcbiAgICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBlcGlzb2RlTGlzdCxcclxuICAgICAgICBjdXJyZW50RXBpc29kZUluZGV4LFxyXG4gICAgICAgIGlzUGxheWluZyxcclxuICAgICAgICBpc0xvb3BpbmcsXHJcbiAgICAgICAgaXNTaHVmZmxpbmcsXHJcbiAgICAgICAgdG9nZ2xlUGxheSxcclxuICAgICAgICB0b2dnbGVMb29wLFxyXG4gICAgICAgIHRvZ2dsZVNodWZmbGUsXHJcbiAgICAgICAgc2V0UGxheWluZ1N0YXRlLFxyXG4gICAgICAgIHBsYXlOZXh0LFxyXG4gICAgICAgIHBsYXlQcmV2aW91cyxcclxuICAgICAgICBoYXNOZXh0LFxyXG4gICAgICAgIGhhc1ByZXZpb3VzLFxyXG4gICAgICAgIGNsZWFyUGxheWVyU3RhdGUsXHJcbiAgICB9ID0gdXNlUGxheWVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZighYXVkaW9SZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaXNQbGF5aW5nXSlcclxuXHJcbiAgICBmdW5jdGlvbiBzZXR1cFByb2dyZXNzTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSA9IDA7XHJcblxyXG4gICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsICgpID0+IHtcclxuICAgICAgICAgIHNldFByb2dyZXNzKE1hdGguZmxvb3IoYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNlZWsoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICBhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lID0gYW1vdW50O1xyXG4gICAgICAgIHNldFByb2dyZXNzKGFtb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRXBpc29kZUVuZGVkKCkge1xyXG4gICAgICAgIGlmIChoYXNOZXh0KSB7XHJcbiAgICAgICAgICAgIHBsYXlOZXh0KClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbGVhclBsYXllclN0YXRlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXBpc29kZSA9IGVwaXNvZGVMaXN0W2N1cnJlbnRFcGlzb2RlSW5kZXhdXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5ZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3BsYXlpbmcuc3ZnXCIgYWx0PVwiVG9jYW5kbyBhZ29yYVwiIC8+XHJcbiAgICAgICAgICAgICAgIDxzdHJvbmc+VG9jYW5kbyBhZ29yYTwvc3Ryb25nPlxyXG4gICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICB7IGVwaXNvZGUgPyAoXHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVudEVwaXNvZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezU5Mn0gXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1OTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtlcGlzb2RlPy50aHVtYm5haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57ZXBpc29kZS50aXRsZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5tZW1iZXJzfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtcHR5UGxheWVyfT5cclxuICAgICAgICAgICAgPHN0cm9uZz5TZWxlY2lvbmUgdW0gcG9kY2FzdCBwYXJhIG91dmlyPC9zdHJvbmc+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICkgfVxyXG5cclxuICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17IWVwaXNvZGUgPyBzdHlsZXMuZW1wdHkgOiAnJ30+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3N9PlxyXG4gICAgICAgICAgICAgICA8c3Bhbj57Y29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKHByb2dyZXNzKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAge2VwaXNvZGUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9e2VwaXNvZGUuZHVyYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2Vla31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrU3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjMDRkMzYxJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWlsU3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjOWY3NWZmJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdHlsZT17e2JvcmRlckNvbG9yOiAnIzA0ZDM2MScsIGJvcmRlcldpZHRoOiA0fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtcHR5U2xpZGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKGVwaXNvZGU/LmR1cmF0aW9uID8/IDApfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICB7ZXBpc29kZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICA8YXVkaW9cclxuICAgICAgICAgICAgICAgICAgIHNyYz17ZXBpc29kZS51cmx9XHJcbiAgICAgICAgICAgICAgICAgICByZWY9e2F1ZGlvUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgbG9vcD17aXNMb29waW5nfVxyXG4gICAgICAgICAgICAgICAgICAgYXV0b1BsYXlcclxuICAgICAgICAgICAgICAgICAgIG9uRW5kZWQ9e2hhbmRsZUVwaXNvZGVFbmRlZH1cclxuICAgICAgICAgICAgICAgICAgIG9uUGxheT17KCkgPT4gc2V0UGxheWluZ1N0YXRlKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgb25QYXVzZT17KCkgPT4gc2V0UGxheWluZ1N0YXRlKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgIG9uTG9hZGVkTWV0YWRhdGE9e3NldHVwUHJvZ3Jlc3NMaXN0ZW5lcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cclxuICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZXBpc29kZSB8fCBlcGlzb2RlTGlzdC5sZW5ndGggPT0gMX1cclxuICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNodWZmbGV9XHJcbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2lzU2h1ZmZsaW5nID8gc3R5bGVzLmlzQWN0aXZlIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3NodWZmbGUuc3ZnXCIgYWx0PVwiRW1iYXJhbGhhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3BsYXlQcmV2aW91c30gZGlzYWJsZWQ9eyFlcGlzb2RlIHx8ICFoYXNQcmV2aW91c30+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9wbGF5LXByZXZpb3VzLnN2Z1wiIGFsdD1cIlRvY2FyIGFudGVyaW9yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBsYXlCdXR0b259IFxyXG4gICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFlcGlzb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUGxheX1cclxuICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICB7IGlzUGxheWluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgID8gPGltZyBzcmM9XCIvaW1nL3BhdXNlLnN2Z1wiIGFsdD1cIlRvY2FyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICA6IDxpbWcgc3JjPVwiL2ltZy9wbGF5LnN2Z1wiIGFsdD1cIlRvY2FyXCIgLz4gfVxyXG4gICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtwbGF5TmV4dH0gZGlzYWJsZWQ9eyFlcGlzb2RlIHx8ICFoYXNOZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvcGxheS1uZXh0LnN2Z1wiIGFsdD1cIlRvY2FyIHByw7N4aW1hXCIgLz5cclxuICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZXBpc29kZX1cclxuICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUxvb3B9XHJcbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2lzTG9vcGluZyA/IHN0eWxlcy5pc0FjdGl2ZSA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9yZXBlYXQuc3ZnXCIgYWx0PVwiUmVwZXRpclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9