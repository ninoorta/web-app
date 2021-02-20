(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["camera-camera-module"],{

/***/ "+phH":
/*!******************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js ***!
  \******************************************************************/
/*! exports provided: shimGetUserMedia, shimGetDisplayMedia, shimMediaStream, shimOnTrack, shimGetSendersWithDtmf, shimGetStats, shimSenderReceiverGetStats, shimAddTrackRemoveTrackWithNative, shimAddTrackRemoveTrack, shimPeerConnection, fixNegotiationNeeded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimMediaStream", function() { return shimMediaStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimOnTrack", function() { return shimOnTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetSendersWithDtmf", function() { return shimGetSendersWithDtmf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetStats", function() { return shimGetStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimSenderReceiverGetStats", function() { return shimSenderReceiverGetStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimAddTrackRemoveTrackWithNative", function() { return shimAddTrackRemoveTrackWithNative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimAddTrackRemoveTrack", function() { return shimAddTrackRemoveTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimPeerConnection", function() { return shimPeerConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixNegotiationNeeded", function() { return fixNegotiationNeeded; });
/* harmony import */ var C_Users_admin_Desktop_testAgain_master_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "rePB");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "lVut");
/* harmony import */ var _getusermedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getusermedia */ "vwHn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return _getusermedia__WEBPACK_IMPORTED_MODULE_2__["shimGetUserMedia"]; });

/* harmony import */ var _getdisplaymedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getdisplaymedia */ "A8Ja");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shimGetDisplayMedia", function() { return _getdisplaymedia__WEBPACK_IMPORTED_MODULE_3__["shimGetDisplayMedia"]; });

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */






function shimMediaStream(window) {
  window.MediaStream = window.MediaStream || window.webkitMediaStream;
}
function shimOnTrack(window) {
  if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
      get: function get() {
        return this._ontrack;
      },
      set: function set(f) {
        if (this._ontrack) {
          this.removeEventListener('track', this._ontrack);
        }

        this.addEventListener('track', this._ontrack = f);
      },
      enumerable: true,
      configurable: true
    });
    var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;

    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
      var _this = this;

      if (!this._ontrackpoly) {
        this._ontrackpoly = function (e) {
          // onaddstream does not fire when a track is added to an existing
          // stream. But stream.onaddtrack is implemented so we use that.
          e.stream.addEventListener('addtrack', function (te) {
            var receiver;

            if (window.RTCPeerConnection.prototype.getReceivers) {
              receiver = _this.getReceivers().find(function (r) {
                return r.track && r.track.id === te.track.id;
              });
            } else {
              receiver = {
                track: te.track
              };
            }

            var event = new Event('track');
            event.track = te.track;
            event.receiver = receiver;
            event.transceiver = {
              receiver: receiver
            };
            event.streams = [e.stream];

            _this.dispatchEvent(event);
          });
          e.stream.getTracks().forEach(function (track) {
            var receiver;

            if (window.RTCPeerConnection.prototype.getReceivers) {
              receiver = _this.getReceivers().find(function (r) {
                return r.track && r.track.id === track.id;
              });
            } else {
              receiver = {
                track: track
              };
            }

            var event = new Event('track');
            event.track = track;
            event.receiver = receiver;
            event.transceiver = {
              receiver: receiver
            };
            event.streams = [e.stream];

            _this.dispatchEvent(event);
          });
        };

        this.addEventListener('addstream', this._ontrackpoly);
      }

      return origSetRemoteDescription.apply(this, arguments);
    };
  } else {
    // even if RTCRtpTransceiver is in window, it is only used and
    // emitted in unified-plan. Unfortunately this means we need
    // to unconditionally wrap the event.
    _utils_js__WEBPACK_IMPORTED_MODULE_1__["wrapPeerConnectionEvent"](window, 'track', function (e) {
      if (!e.transceiver) {
        Object.defineProperty(e, 'transceiver', {
          value: {
            receiver: e.receiver
          }
        });
      }

      return e;
    });
  }
}
function shimGetSendersWithDtmf(window) {
  // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
  if (typeof window === 'object' && window.RTCPeerConnection && !('getSenders' in window.RTCPeerConnection.prototype) && 'createDTMFSender' in window.RTCPeerConnection.prototype) {
    var shimSenderWithDtmf = function shimSenderWithDtmf(pc, track) {
      return {
        track: track,

        get dtmf() {
          if (this._dtmf === undefined) {
            if (track.kind === 'audio') {
              this._dtmf = pc.createDTMFSender(track);
            } else {
              this._dtmf = null;
            }
          }

          return this._dtmf;
        },

        _pc: pc
      };
    }; // augment addTrack when getSenders is not available.


    if (!window.RTCPeerConnection.prototype.getSenders) {
      window.RTCPeerConnection.prototype.getSenders = function getSenders() {
        this._senders = this._senders || [];
        return this._senders.slice(); // return a copy of the internal state.
      };

      var origAddTrack = window.RTCPeerConnection.prototype.addTrack;

      window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
        var sender = origAddTrack.apply(this, arguments);

        if (!sender) {
          sender = shimSenderWithDtmf(this, track);

          this._senders.push(sender);
        }

        return sender;
      };

      var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;

      window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
        origRemoveTrack.apply(this, arguments);

        var idx = this._senders.indexOf(sender);

        if (idx !== -1) {
          this._senders.splice(idx, 1);
        }
      };
    }

    var origAddStream = window.RTCPeerConnection.prototype.addStream;

    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
      var _this2 = this;

      this._senders = this._senders || [];
      origAddStream.apply(this, [stream]);
      stream.getTracks().forEach(function (track) {
        _this2._senders.push(shimSenderWithDtmf(_this2, track));
      });
    };

    var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;

    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
      var _this3 = this;

      this._senders = this._senders || [];
      origRemoveStream.apply(this, [stream]);
      stream.getTracks().forEach(function (track) {
        var sender = _this3._senders.find(function (s) {
          return s.track === track;
        });

        if (sender) {
          // remove sender
          _this3._senders.splice(_this3._senders.indexOf(sender), 1);
        }
      });
    };
  } else if (typeof window === 'object' && window.RTCPeerConnection && 'getSenders' in window.RTCPeerConnection.prototype && 'createDTMFSender' in window.RTCPeerConnection.prototype && window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
    var origGetSenders = window.RTCPeerConnection.prototype.getSenders;

    window.RTCPeerConnection.prototype.getSenders = function getSenders() {
      var _this4 = this;

      var senders = origGetSenders.apply(this, []);
      senders.forEach(function (sender) {
        return sender._pc = _this4;
      });
      return senders;
    };

    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
      get: function get() {
        if (this._dtmf === undefined) {
          if (this.track.kind === 'audio') {
            this._dtmf = this._pc.createDTMFSender(this.track);
          } else {
            this._dtmf = null;
          }
        }

        return this._dtmf;
      }
    });
  }
}
function shimGetStats(window) {
  if (!window.RTCPeerConnection) {
    return;
  }

  var origGetStats = window.RTCPeerConnection.prototype.getStats;

  window.RTCPeerConnection.prototype.getStats = function getStats() {
    var _this5 = this;

    var _arguments = Array.prototype.slice.call(arguments),
        selector = _arguments[0],
        onSucc = _arguments[1],
        onErr = _arguments[2]; // If selector is a function then we are in the old style stats so just
    // pass back the original getStats format to avoid breaking old users.


    if (arguments.length > 0 && typeof selector === 'function') {
      return origGetStats.apply(this, arguments);
    } // When spec-style getStats is supported, return those when called with
    // either no arguments or the selector argument is null.


    if (origGetStats.length === 0 && (arguments.length === 0 || typeof selector !== 'function')) {
      return origGetStats.apply(this, []);
    }

    var fixChromeStats_ = function fixChromeStats_(response) {
      var standardReport = {};
      var reports = response.result();
      reports.forEach(function (report) {
        var standardStats = {
          id: report.id,
          timestamp: report.timestamp,
          type: {
            localcandidate: 'local-candidate',
            remotecandidate: 'remote-candidate'
          }[report.type] || report.type
        };
        report.names().forEach(function (name) {
          standardStats[name] = report.stat(name);
        });
        standardReport[standardStats.id] = standardStats;
      });
      return standardReport;
    }; // shim getStats with maplike support


    var makeMapStats = function makeMapStats(stats) {
      return new Map(Object.keys(stats).map(function (key) {
        return [key, stats[key]];
      }));
    };

    if (arguments.length >= 2) {
      var successCallbackWrapper_ = function successCallbackWrapper_(response) {
        onSucc(makeMapStats(fixChromeStats_(response)));
      };

      return origGetStats.apply(this, [successCallbackWrapper_, selector]);
    } // promise-support


    return new Promise(function (resolve, reject) {
      origGetStats.apply(_this5, [function (response) {
        resolve(makeMapStats(fixChromeStats_(response)));
      }, reject]);
    }).then(onSucc, onErr);
  };
}
function shimSenderReceiverGetStats(window) {
  if (!(typeof window === 'object' && window.RTCPeerConnection && window.RTCRtpSender && window.RTCRtpReceiver)) {
    return;
  } // shim sender stats.


  if (!('getStats' in window.RTCRtpSender.prototype)) {
    var origGetSenders = window.RTCPeerConnection.prototype.getSenders;

    if (origGetSenders) {
      window.RTCPeerConnection.prototype.getSenders = function getSenders() {
        var _this6 = this;

        var senders = origGetSenders.apply(this, []);
        senders.forEach(function (sender) {
          return sender._pc = _this6;
        });
        return senders;
      };
    }

    var origAddTrack = window.RTCPeerConnection.prototype.addTrack;

    if (origAddTrack) {
      window.RTCPeerConnection.prototype.addTrack = function addTrack() {
        var sender = origAddTrack.apply(this, arguments);
        sender._pc = this;
        return sender;
      };
    }

    window.RTCRtpSender.prototype.getStats = function getStats() {
      var sender = this;
      return this._pc.getStats().then(function (result) {
        return (
          /* Note: this will include stats of all senders that
           *   send a track with the same id as sender.track as
           *   it is not possible to identify the RTCRtpSender.
           */
          _utils_js__WEBPACK_IMPORTED_MODULE_1__["filterStats"](result, sender.track, true)
        );
      });
    };
  } // shim receiver stats.


  if (!('getStats' in window.RTCRtpReceiver.prototype)) {
    var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;

    if (origGetReceivers) {
      window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
        var _this7 = this;

        var receivers = origGetReceivers.apply(this, []);
        receivers.forEach(function (receiver) {
          return receiver._pc = _this7;
        });
        return receivers;
      };
    }

    _utils_js__WEBPACK_IMPORTED_MODULE_1__["wrapPeerConnectionEvent"](window, 'track', function (e) {
      e.receiver._pc = e.srcElement;
      return e;
    });

    window.RTCRtpReceiver.prototype.getStats = function getStats() {
      var receiver = this;
      return this._pc.getStats().then(function (result) {
        return _utils_js__WEBPACK_IMPORTED_MODULE_1__["filterStats"](result, receiver.track, false);
      });
    };
  }

  if (!('getStats' in window.RTCRtpSender.prototype && 'getStats' in window.RTCRtpReceiver.prototype)) {
    return;
  } // shim RTCPeerConnection.getStats(track).


  var origGetStats = window.RTCPeerConnection.prototype.getStats;

  window.RTCPeerConnection.prototype.getStats = function getStats() {
    if (arguments.length > 0 && arguments[0] instanceof window.MediaStreamTrack) {
      var track = arguments[0];
      var sender;
      var receiver;
      var err;
      this.getSenders().forEach(function (s) {
        if (s.track === track) {
          if (sender) {
            err = true;
          } else {
            sender = s;
          }
        }
      });
      this.getReceivers().forEach(function (r) {
        if (r.track === track) {
          if (receiver) {
            err = true;
          } else {
            receiver = r;
          }
        }

        return r.track === track;
      });

      if (err || sender && receiver) {
        return Promise.reject(new DOMException('There are more than one sender or receiver for the track.', 'InvalidAccessError'));
      } else if (sender) {
        return sender.getStats();
      } else if (receiver) {
        return receiver.getStats();
      }

      return Promise.reject(new DOMException('There is no sender or receiver for the track.', 'InvalidAccessError'));
    }

    return origGetStats.apply(this, arguments);
  };
}
function shimAddTrackRemoveTrackWithNative(window) {
  // shim addTrack/removeTrack with native variants in order to make
  // the interactions with legacy getLocalStreams behave as in other browsers.
  // Keeps a mapping stream.id => [stream, rtpsenders...]
  window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
    var _this8 = this;

    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    return Object.keys(this._shimmedLocalStreams).map(function (streamId) {
      return _this8._shimmedLocalStreams[streamId][0];
    });
  };

  var origAddTrack = window.RTCPeerConnection.prototype.addTrack;

  window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
    if (!stream) {
      return origAddTrack.apply(this, arguments);
    }

    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    var sender = origAddTrack.apply(this, arguments);

    if (!this._shimmedLocalStreams[stream.id]) {
      this._shimmedLocalStreams[stream.id] = [stream, sender];
    } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
      this._shimmedLocalStreams[stream.id].push(sender);
    }

    return sender;
  };

  var origAddStream = window.RTCPeerConnection.prototype.addStream;

  window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
    var _this9 = this;

    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    stream.getTracks().forEach(function (track) {
      var alreadyExists = _this9.getSenders().find(function (s) {
        return s.track === track;
      });

      if (alreadyExists) {
        throw new DOMException('Track already exists.', 'InvalidAccessError');
      }
    });
    var existingSenders = this.getSenders();
    origAddStream.apply(this, arguments);
    var newSenders = this.getSenders().filter(function (newSender) {
      return existingSenders.indexOf(newSender) === -1;
    });
    this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
  };

  var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;

  window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    delete this._shimmedLocalStreams[stream.id];
    return origRemoveStream.apply(this, arguments);
  };

  var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;

  window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
    var _this10 = this;

    this._shimmedLocalStreams = this._shimmedLocalStreams || {};

    if (sender) {
      Object.keys(this._shimmedLocalStreams).forEach(function (streamId) {
        var idx = _this10._shimmedLocalStreams[streamId].indexOf(sender);

        if (idx !== -1) {
          _this10._shimmedLocalStreams[streamId].splice(idx, 1);
        }

        if (_this10._shimmedLocalStreams[streamId].length === 1) {
          delete _this10._shimmedLocalStreams[streamId];
        }
      });
    }

    return origRemoveTrack.apply(this, arguments);
  };
}
function shimAddTrackRemoveTrack(window) {
  if (!window.RTCPeerConnection) {
    return;
  }

  var browserDetails = _utils_js__WEBPACK_IMPORTED_MODULE_1__["detectBrowser"](window); // shim addTrack and removeTrack.

  if (window.RTCPeerConnection.prototype.addTrack && browserDetails.version >= 65) {
    return shimAddTrackRemoveTrackWithNative(window);
  } // also shim pc.getLocalStreams when addTrack is shimmed
  // to return the original streams.


  var origGetLocalStreams = window.RTCPeerConnection.prototype.getLocalStreams;

  window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
    var _this11 = this;

    var nativeStreams = origGetLocalStreams.apply(this);
    this._reverseStreams = this._reverseStreams || {};
    return nativeStreams.map(function (stream) {
      return _this11._reverseStreams[stream.id];
    });
  };

  var origAddStream = window.RTCPeerConnection.prototype.addStream;

  window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
    var _this12 = this;

    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};
    stream.getTracks().forEach(function (track) {
      var alreadyExists = _this12.getSenders().find(function (s) {
        return s.track === track;
      });

      if (alreadyExists) {
        throw new DOMException('Track already exists.', 'InvalidAccessError');
      }
    }); // Add identity mapping for consistency with addTrack.
    // Unless this is being used with a stream from addTrack.

    if (!this._reverseStreams[stream.id]) {
      var newStream = new window.MediaStream(stream.getTracks());
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      stream = newStream;
    }

    origAddStream.apply(this, [stream]);
  };

  var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;

  window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};
    origRemoveStream.apply(this, [this._streams[stream.id] || stream]);
    delete this._reverseStreams[this._streams[stream.id] ? this._streams[stream.id].id : stream.id];
    delete this._streams[stream.id];
  };

  window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
    var _this13 = this;

    if (this.signalingState === 'closed') {
      throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
    }

    var streams = [].slice.call(arguments, 1);

    if (streams.length !== 1 || !streams[0].getTracks().find(function (t) {
      return t === track;
    })) {
      // this is not fully correct but all we can manage without
      // [[associated MediaStreams]] internal slot.
      throw new DOMException('The adapter.js addTrack polyfill only supports a single ' + ' stream which is associated with the specified track.', 'NotSupportedError');
    }

    var alreadyExists = this.getSenders().find(function (s) {
      return s.track === track;
    });

    if (alreadyExists) {
      throw new DOMException('Track already exists.', 'InvalidAccessError');
    }

    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};
    var oldStream = this._streams[stream.id];

    if (oldStream) {
      // this is using odd Chrome behaviour, use with caution:
      // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
      // Note: we rely on the high-level addTrack/dtmf shim to
      // create the sender with a dtmf sender.
      oldStream.addTrack(track); // Trigger ONN async.

      Promise.resolve().then(function () {
        _this13.dispatchEvent(new Event('negotiationneeded'));
      });
    } else {
      var newStream = new window.MediaStream([track]);
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      this.addStream(newStream);
    }

    return this.getSenders().find(function (s) {
      return s.track === track;
    });
  }; // replace the internal stream id with the external one and
  // vice versa.


  function replaceInternalStreamId(pc, description) {
    var sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
      var externalStream = pc._reverseStreams[internalId];
      var internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(internalStream.id, 'g'), externalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp: sdp
    });
  }

  function replaceExternalStreamId(pc, description) {
    var sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
      var externalStream = pc._reverseStreams[internalId];
      var internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(externalStream.id, 'g'), internalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp: sdp
    });
  }

  ['createOffer', 'createAnswer'].forEach(function (method) {
    var nativeMethod = window.RTCPeerConnection.prototype[method];

    var methodObj = Object(C_Users_admin_Desktop_testAgain_master_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, method, function () {
      var _this14 = this;

      var args = arguments;
      var isLegacyCall = arguments.length && typeof arguments[0] === 'function';

      if (isLegacyCall) {
        return nativeMethod.apply(this, [function (description) {
          var desc = replaceInternalStreamId(_this14, description);
          args[0].apply(null, [desc]);
        }, function (err) {
          if (args[1]) {
            args[1].apply(null, err);
          }
        }, arguments[2]]);
      }

      return nativeMethod.apply(this, arguments).then(function (description) {
        return replaceInternalStreamId(_this14, description);
      });
    });

    window.RTCPeerConnection.prototype[method] = methodObj[method];
  });
  var origSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;

  window.RTCPeerConnection.prototype.setLocalDescription = function setLocalDescription() {
    if (!arguments.length || !arguments[0].type) {
      return origSetLocalDescription.apply(this, arguments);
    }

    arguments[0] = replaceExternalStreamId(this, arguments[0]);
    return origSetLocalDescription.apply(this, arguments);
  }; // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier


  var origLocalDescription = Object.getOwnPropertyDescriptor(window.RTCPeerConnection.prototype, 'localDescription');
  Object.defineProperty(window.RTCPeerConnection.prototype, 'localDescription', {
    get: function get() {
      var description = origLocalDescription.get.apply(this);

      if (description.type === '') {
        return description;
      }

      return replaceInternalStreamId(this, description);
    }
  });

  window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
    var _this15 = this;

    if (this.signalingState === 'closed') {
      throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
    } // We can not yet check for sender instanceof RTCRtpSender
    // since we shim RTPSender. So we check if sender._pc is set.


    if (!sender._pc) {
      throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' + 'does not implement interface RTCRtpSender.', 'TypeError');
    }

    var isLocal = sender._pc === this;

    if (!isLocal) {
      throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
    } // Search for the native stream the senders track belongs to.


    this._streams = this._streams || {};
    var stream;
    Object.keys(this._streams).forEach(function (streamid) {
      var hasTrack = _this15._streams[streamid].getTracks().find(function (track) {
        return sender.track === track;
      });

      if (hasTrack) {
        stream = _this15._streams[streamid];
      }
    });

    if (stream) {
      if (stream.getTracks().length === 1) {
        // if this is the last track of the stream, remove the stream. This
        // takes care of any shimmed _senders.
        this.removeStream(this._reverseStreams[stream.id]);
      } else {
        // relying on the same odd chrome behaviour as above.
        stream.removeTrack(sender.track);
      }

      this.dispatchEvent(new Event('negotiationneeded'));
    }
  };
}
function shimPeerConnection(window) {
  var browserDetails = _utils_js__WEBPACK_IMPORTED_MODULE_1__["detectBrowser"](window);

  if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.webkitRTCPeerConnection;
  }

  if (!window.RTCPeerConnection) {
    return;
  }

  var addIceCandidateNullSupported = window.RTCPeerConnection.prototype.addIceCandidate.length === 0; // shim implicit creation of RTCSessionDescription/RTCIceCandidate

  if (browserDetails.version < 53) {
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
      var nativeMethod = window.RTCPeerConnection.prototype[method];

      var methodObj = Object(C_Users_admin_Desktop_testAgain_master_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, method, function () {
        arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
        return nativeMethod.apply(this, arguments);
      });

      window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
  } // support for addIceCandidate(null or undefined)


  var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;

  window.RTCPeerConnection.prototype.addIceCandidate = function addIceCandidate() {
    if (!addIceCandidateNullSupported && !arguments[0]) {
      if (arguments[1]) {
        arguments[1].apply(null);
      }

      return Promise.resolve();
    } // Firefox 68+ emits and processes {candidate: "", ...}, ignore
    // in older versions. Native support planned for Chrome M77.


    if (browserDetails.version < 78 && arguments[0] && arguments[0].candidate === '') {
      return Promise.resolve();
    }

    return nativeAddIceCandidate.apply(this, arguments);
  };
} // Attempt to fix ONN in plan-b mode.

function fixNegotiationNeeded(window) {
  var browserDetails = _utils_js__WEBPACK_IMPORTED_MODULE_1__["detectBrowser"](window);
  _utils_js__WEBPACK_IMPORTED_MODULE_1__["wrapPeerConnectionEvent"](window, 'negotiationneeded', function (e) {
    var pc = e.target;

    if (browserDetails.version < 72 || pc.getConfiguration && pc.getConfiguration().sdpSemantics === 'plan-b') {
      if (pc.signalingState !== 'stable') {
        return;
      }
    }

    return e;
  });
}

/***/ }),

/***/ "0JNz":
/*!************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/adapter_core.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adapter_factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter_factory.js */ "GAh6");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */



var adapter = Object(_adapter_factory_js__WEBPACK_IMPORTED_MODULE_0__["adapterFactory"])({
  window: typeof window === 'undefined' ? undefined : window
});
/* harmony default export */ __webpack_exports__["default"] = (adapter);

/***/ }),

/***/ "8D0k":
/*!******************************************************************!*\
  !*** ./node_modules/rtcpeerconnection-shim/rtcpeerconnection.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


var SDPUtils = __webpack_require__(/*! sdp */ "KCt4");

function fixStatsType(stat) {
  return {
    inboundrtp: 'inbound-rtp',
    outboundrtp: 'outbound-rtp',
    candidatepair: 'candidate-pair',
    localcandidate: 'local-candidate',
    remotecandidate: 'remote-candidate'
  }[stat.type] || stat.type;
}

function writeMediaSection(transceiver, caps, type, stream, dtlsRole) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps); // Map ICE parameters (ufrag, pwd) to SDP.

  sdp += SDPUtils.writeIceParameters(transceiver.iceGatherer.getLocalParameters()); // Map DTLS parameters to SDP.

  sdp += SDPUtils.writeDtlsParameters(transceiver.dtlsTransport.getLocalParameters(), type === 'offer' ? 'actpass' : dtlsRole || 'active');
  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    var trackId = transceiver.rtpSender._initialTrackId || transceiver.rtpSender.track.id;
    transceiver.rtpSender._initialTrackId = trackId; // spec.

    var msid = 'msid:' + (stream ? stream.id : '-') + ' ' + trackId + '\r\n';
    sdp += 'a=' + msid; // for Chrome. Legacy should no longer be required.

    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' ' + msid; // RTX

    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' ' + msid;
      sdp += 'a=ssrc-group:FID ' + transceiver.sendEncodingParameters[0].ssrc + ' ' + transceiver.sendEncodingParameters[0].rtx.ssrc + '\r\n';
    }
  } // FIXME: this should be written by writeRtpDescription.


  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' cname:' + SDPUtils.localCName + '\r\n';

  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' cname:' + SDPUtils.localCName + '\r\n';
  }

  return sdp;
} // Edge does not like
// 1) stun: filtered after 14393 unless ?transport=udp is present
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times


function filterIceServers(iceServers, edgeVersion) {
  var hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(function (server) {
    if (server && (server.urls || server.url)) {
      var urls = server.urls || server.url;

      if (server.url && !server.urls) {
        console.warn('RTCIceServer.url is deprecated! Use urls instead.');
      }

      var isString = typeof urls === 'string';

      if (isString) {
        urls = [urls];
      }

      urls = urls.filter(function (url) {
        var validTurn = url.indexOf('turn:') === 0 && url.indexOf('transport=udp') !== -1 && url.indexOf('turn:[') === -1 && !hasTurn;

        if (validTurn) {
          hasTurn = true;
          return true;
        }

        return url.indexOf('stun:') === 0 && edgeVersion >= 14393 && url.indexOf('?transport=udp') === -1;
      });
      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
} // Determines the intersection of local and remote capabilities.


function getCommonCapabilities(localCapabilities, remoteCapabilities) {
  var commonCapabilities = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: []
  };

  var findCodecByPayloadType = function findCodecByPayloadType(pt, codecs) {
    pt = parseInt(pt, 10);

    for (var i = 0; i < codecs.length; i++) {
      if (codecs[i].payloadType === pt || codecs[i].preferredPayloadType === pt) {
        return codecs[i];
      }
    }
  };

  var rtxCapabilityMatches = function rtxCapabilityMatches(lRtx, rRtx, lCodecs, rCodecs) {
    var lCodec = findCodecByPayloadType(lRtx.parameters.apt, lCodecs);
    var rCodec = findCodecByPayloadType(rRtx.parameters.apt, rCodecs);
    return lCodec && rCodec && lCodec.name.toLowerCase() === rCodec.name.toLowerCase();
  };

  localCapabilities.codecs.forEach(function (lCodec) {
    for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
      var rCodec = remoteCapabilities.codecs[i];

      if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() && lCodec.clockRate === rCodec.clockRate) {
        if (lCodec.name.toLowerCase() === 'rtx' && lCodec.parameters && rCodec.parameters.apt) {
          // for RTX we need to find the local rtx that has a apt
          // which points to the same local codec as the remote one.
          if (!rtxCapabilityMatches(lCodec, rCodec, localCapabilities.codecs, remoteCapabilities.codecs)) {
            continue;
          }
        }

        rCodec = JSON.parse(JSON.stringify(rCodec)); // deepcopy
        // number of channels is the highest common number of channels

        rCodec.numChannels = Math.min(lCodec.numChannels, rCodec.numChannels); // push rCodec so we reply with offerer payload type

        commonCapabilities.codecs.push(rCodec); // determine common feedback mechanisms

        rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function (fb) {
          for (var j = 0; j < lCodec.rtcpFeedback.length; j++) {
            if (lCodec.rtcpFeedback[j].type === fb.type && lCodec.rtcpFeedback[j].parameter === fb.parameter) {
              return true;
            }
          }

          return false;
        }); // FIXME: also need to determine .parameters
        //  see https://github.com/openpeer/ortc/issues/569

        break;
      }
    }
  });
  localCapabilities.headerExtensions.forEach(function (lHeaderExtension) {
    for (var i = 0; i < remoteCapabilities.headerExtensions.length; i++) {
      var rHeaderExtension = remoteCapabilities.headerExtensions[i];

      if (lHeaderExtension.uri === rHeaderExtension.uri) {
        commonCapabilities.headerExtensions.push(rHeaderExtension);
        break;
      }
    }
  }); // FIXME: fecMechanisms

  return commonCapabilities;
} // is action=setLocalDescription with type allowed in signalingState


function isActionAllowedInSignalingState(action, type, signalingState) {
  return {
    offer: {
      setLocalDescription: ['stable', 'have-local-offer'],
      setRemoteDescription: ['stable', 'have-remote-offer']
    },
    answer: {
      setLocalDescription: ['have-remote-offer', 'have-local-pranswer'],
      setRemoteDescription: ['have-local-offer', 'have-remote-pranswer']
    }
  }[type][action].indexOf(signalingState) !== -1;
}

function maybeAddCandidate(iceTransport, candidate) {
  // Edge's internal representation adds some fields therefore
  // not all fieldѕ are taken into account.
  var alreadyAdded = iceTransport.getRemoteCandidates().find(function (remoteCandidate) {
    return candidate.foundation === remoteCandidate.foundation && candidate.ip === remoteCandidate.ip && candidate.port === remoteCandidate.port && candidate.priority === remoteCandidate.priority && candidate.protocol === remoteCandidate.protocol && candidate.type === remoteCandidate.type;
  });

  if (!alreadyAdded) {
    iceTransport.addRemoteCandidate(candidate);
  }

  return !alreadyAdded;
}

function makeError(name, description) {
  var e = new Error(description);
  e.name = name; // legacy error codes from https://heycam.github.io/webidl/#idl-DOMException-error-names

  e.code = {
    NotSupportedError: 9,
    InvalidStateError: 11,
    InvalidAccessError: 15,
    TypeError: undefined,
    OperationError: undefined
  }[name];
  return e;
}

module.exports = function (window, edgeVersion) {
  // https://w3c.github.io/mediacapture-main/#mediastream
  // Helper function to add the track to the stream and
  // dispatch the event ourselves.
  function addTrackToStreamAndFireEvent(track, stream) {
    stream.addTrack(track);
    stream.dispatchEvent(new window.MediaStreamTrackEvent('addtrack', {
      track: track
    }));
  }

  function removeTrackFromStreamAndFireEvent(track, stream) {
    stream.removeTrack(track);
    stream.dispatchEvent(new window.MediaStreamTrackEvent('removetrack', {
      track: track
    }));
  }

  function fireAddTrack(pc, track, receiver, streams) {
    var trackEvent = new Event('track');
    trackEvent.track = track;
    trackEvent.receiver = receiver;
    trackEvent.transceiver = {
      receiver: receiver
    };
    trackEvent.streams = streams;
    window.setTimeout(function () {
      pc._dispatchEvent('track', trackEvent);
    });
  }

  var RTCPeerConnection = function RTCPeerConnection(config) {
    var pc = this;

    var _eventTarget = document.createDocumentFragment();

    ['addEventListener', 'removeEventListener', 'dispatchEvent'].forEach(function (method) {
      pc[method] = _eventTarget[method].bind(_eventTarget);
    });
    this.canTrickleIceCandidates = null;
    this.needNegotiation = false;
    this.localStreams = [];
    this.remoteStreams = [];
    this._localDescription = null;
    this._remoteDescription = null;
    this.signalingState = 'stable';
    this.iceConnectionState = 'new';
    this.connectionState = 'new';
    this.iceGatheringState = 'new';
    config = JSON.parse(JSON.stringify(config || {}));
    this.usingBundle = config.bundlePolicy === 'max-bundle';

    if (config.rtcpMuxPolicy === 'negotiate') {
      throw makeError('NotSupportedError', 'rtcpMuxPolicy \'negotiate\' is not supported');
    } else if (!config.rtcpMuxPolicy) {
      config.rtcpMuxPolicy = 'require';
    }

    switch (config.iceTransportPolicy) {
      case 'all':
      case 'relay':
        break;

      default:
        config.iceTransportPolicy = 'all';
        break;
    }

    switch (config.bundlePolicy) {
      case 'balanced':
      case 'max-compat':
      case 'max-bundle':
        break;

      default:
        config.bundlePolicy = 'balanced';
        break;
    }

    config.iceServers = filterIceServers(config.iceServers || [], edgeVersion);
    this._iceGatherers = [];

    if (config.iceCandidatePoolSize) {
      for (var i = config.iceCandidatePoolSize; i > 0; i--) {
        this._iceGatherers.push(new window.RTCIceGatherer({
          iceServers: config.iceServers,
          gatherPolicy: config.iceTransportPolicy
        }));
      }
    } else {
      config.iceCandidatePoolSize = 0;
    }

    this._config = config; // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
    // everything that is needed to describe a SDP m-line.

    this.transceivers = [];
    this._sdpSessionId = SDPUtils.generateSessionId();
    this._sdpSessionVersion = 0;
    this._dtlsRole = undefined; // role for a=setup to use in answers.

    this._isClosed = false;
  };

  Object.defineProperty(RTCPeerConnection.prototype, 'localDescription', {
    configurable: true,
    get: function get() {
      return this._localDescription;
    }
  });
  Object.defineProperty(RTCPeerConnection.prototype, 'remoteDescription', {
    configurable: true,
    get: function get() {
      return this._remoteDescription;
    }
  }); // set up event handlers on prototype

  RTCPeerConnection.prototype.onicecandidate = null;
  RTCPeerConnection.prototype.onaddstream = null;
  RTCPeerConnection.prototype.ontrack = null;
  RTCPeerConnection.prototype.onremovestream = null;
  RTCPeerConnection.prototype.onsignalingstatechange = null;
  RTCPeerConnection.prototype.oniceconnectionstatechange = null;
  RTCPeerConnection.prototype.onconnectionstatechange = null;
  RTCPeerConnection.prototype.onicegatheringstatechange = null;
  RTCPeerConnection.prototype.onnegotiationneeded = null;
  RTCPeerConnection.prototype.ondatachannel = null;

  RTCPeerConnection.prototype._dispatchEvent = function (name, event) {
    if (this._isClosed) {
      return;
    }

    this.dispatchEvent(event);

    if (typeof this['on' + name] === 'function') {
      this['on' + name](event);
    }
  };

  RTCPeerConnection.prototype._emitGatheringStateChange = function () {
    var event = new Event('icegatheringstatechange');

    this._dispatchEvent('icegatheringstatechange', event);
  };

  RTCPeerConnection.prototype.getConfiguration = function () {
    return this._config;
  };

  RTCPeerConnection.prototype.getLocalStreams = function () {
    return this.localStreams;
  };

  RTCPeerConnection.prototype.getRemoteStreams = function () {
    return this.remoteStreams;
  }; // internal helper to create a transceiver object.
  // (which is not yet the same as the WebRTC 1.0 transceiver)


  RTCPeerConnection.prototype._createTransceiver = function (kind, doNotAdd) {
    var hasBundleTransport = this.transceivers.length > 0;
    var transceiver = {
      track: null,
      iceGatherer: null,
      iceTransport: null,
      dtlsTransport: null,
      localCapabilities: null,
      remoteCapabilities: null,
      rtpSender: null,
      rtpReceiver: null,
      kind: kind,
      mid: null,
      sendEncodingParameters: null,
      recvEncodingParameters: null,
      stream: null,
      associatedRemoteMediaStreams: [],
      wantReceive: true
    };

    if (this.usingBundle && hasBundleTransport) {
      transceiver.iceTransport = this.transceivers[0].iceTransport;
      transceiver.dtlsTransport = this.transceivers[0].dtlsTransport;
    } else {
      var transports = this._createIceAndDtlsTransports();

      transceiver.iceTransport = transports.iceTransport;
      transceiver.dtlsTransport = transports.dtlsTransport;
    }

    if (!doNotAdd) {
      this.transceivers.push(transceiver);
    }

    return transceiver;
  };

  RTCPeerConnection.prototype.addTrack = function (track, stream) {
    if (this._isClosed) {
      throw makeError('InvalidStateError', 'Attempted to call addTrack on a closed peerconnection.');
    }

    var alreadyExists = this.transceivers.find(function (s) {
      return s.track === track;
    });

    if (alreadyExists) {
      throw makeError('InvalidAccessError', 'Track already exists.');
    }

    var transceiver;

    for (var i = 0; i < this.transceivers.length; i++) {
      if (!this.transceivers[i].track && this.transceivers[i].kind === track.kind) {
        transceiver = this.transceivers[i];
      }
    }

    if (!transceiver) {
      transceiver = this._createTransceiver(track.kind);
    }

    this._maybeFireNegotiationNeeded();

    if (this.localStreams.indexOf(stream) === -1) {
      this.localStreams.push(stream);
    }

    transceiver.track = track;
    transceiver.stream = stream;
    transceiver.rtpSender = new window.RTCRtpSender(track, transceiver.dtlsTransport);
    return transceiver.rtpSender;
  };

  RTCPeerConnection.prototype.addStream = function (stream) {
    var pc = this;

    if (edgeVersion >= 15025) {
      stream.getTracks().forEach(function (track) {
        pc.addTrack(track, stream);
      });
    } else {
      // Clone is necessary for local demos mostly, attaching directly
      // to two different senders does not work (build 10547).
      // Fixed in 15025 (or earlier)
      var clonedStream = stream.clone();
      stream.getTracks().forEach(function (track, idx) {
        var clonedTrack = clonedStream.getTracks()[idx];
        track.addEventListener('enabled', function (event) {
          clonedTrack.enabled = event.enabled;
        });
      });
      clonedStream.getTracks().forEach(function (track) {
        pc.addTrack(track, clonedStream);
      });
    }
  };

  RTCPeerConnection.prototype.removeTrack = function (sender) {
    if (this._isClosed) {
      throw makeError('InvalidStateError', 'Attempted to call removeTrack on a closed peerconnection.');
    }

    if (!(sender instanceof window.RTCRtpSender)) {
      throw new TypeError('Argument 1 of RTCPeerConnection.removeTrack ' + 'does not implement interface RTCRtpSender.');
    }

    var transceiver = this.transceivers.find(function (t) {
      return t.rtpSender === sender;
    });

    if (!transceiver) {
      throw makeError('InvalidAccessError', 'Sender was not created by this connection.');
    }

    var stream = transceiver.stream;
    transceiver.rtpSender.stop();
    transceiver.rtpSender = null;
    transceiver.track = null;
    transceiver.stream = null; // remove the stream from the set of local streams

    var localStreams = this.transceivers.map(function (t) {
      return t.stream;
    });

    if (localStreams.indexOf(stream) === -1 && this.localStreams.indexOf(stream) > -1) {
      this.localStreams.splice(this.localStreams.indexOf(stream), 1);
    }

    this._maybeFireNegotiationNeeded();
  };

  RTCPeerConnection.prototype.removeStream = function (stream) {
    var pc = this;
    stream.getTracks().forEach(function (track) {
      var sender = pc.getSenders().find(function (s) {
        return s.track === track;
      });

      if (sender) {
        pc.removeTrack(sender);
      }
    });
  };

  RTCPeerConnection.prototype.getSenders = function () {
    return this.transceivers.filter(function (transceiver) {
      return !!transceiver.rtpSender;
    }).map(function (transceiver) {
      return transceiver.rtpSender;
    });
  };

  RTCPeerConnection.prototype.getReceivers = function () {
    return this.transceivers.filter(function (transceiver) {
      return !!transceiver.rtpReceiver;
    }).map(function (transceiver) {
      return transceiver.rtpReceiver;
    });
  };

  RTCPeerConnection.prototype._createIceGatherer = function (sdpMLineIndex, usingBundle) {
    var pc = this;

    if (usingBundle && sdpMLineIndex > 0) {
      return this.transceivers[0].iceGatherer;
    } else if (this._iceGatherers.length) {
      return this._iceGatherers.shift();
    }

    var iceGatherer = new window.RTCIceGatherer({
      iceServers: this._config.iceServers,
      gatherPolicy: this._config.iceTransportPolicy
    });
    Object.defineProperty(iceGatherer, 'state', {
      value: 'new',
      writable: true
    });
    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = [];

    this.transceivers[sdpMLineIndex].bufferCandidates = function (event) {
      var end = !event.candidate || Object.keys(event.candidate).length === 0; // polyfill since RTCIceGatherer.state is not implemented in
      // Edge 10547 yet.

      iceGatherer.state = end ? 'completed' : 'gathering';

      if (pc.transceivers[sdpMLineIndex].bufferedCandidateEvents !== null) {
        pc.transceivers[sdpMLineIndex].bufferedCandidateEvents.push(event);
      }
    };

    iceGatherer.addEventListener('localcandidate', this.transceivers[sdpMLineIndex].bufferCandidates);
    return iceGatherer;
  }; // start gathering from an RTCIceGatherer.


  RTCPeerConnection.prototype._gather = function (mid, sdpMLineIndex) {
    var pc = this;
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;

    if (iceGatherer.onlocalcandidate) {
      return;
    }

    var bufferedCandidateEvents = this.transceivers[sdpMLineIndex].bufferedCandidateEvents;
    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = null;
    iceGatherer.removeEventListener('localcandidate', this.transceivers[sdpMLineIndex].bufferCandidates);

    iceGatherer.onlocalcandidate = function (evt) {
      if (pc.usingBundle && sdpMLineIndex > 0) {
        // if we know that we use bundle we can drop candidates with
        // ѕdpMLineIndex > 0. If we don't do this then our state gets
        // confused since we dispose the extra ice gatherer.
        return;
      }

      var event = new Event('icecandidate');
      event.candidate = {
        sdpMid: mid,
        sdpMLineIndex: sdpMLineIndex
      };
      var cand = evt.candidate; // Edge emits an empty object for RTCIceCandidateComplete‥

      var end = !cand || Object.keys(cand).length === 0;

      if (end) {
        // polyfill since RTCIceGatherer.state is not implemented in
        // Edge 10547 yet.
        if (iceGatherer.state === 'new' || iceGatherer.state === 'gathering') {
          iceGatherer.state = 'completed';
        }
      } else {
        if (iceGatherer.state === 'new') {
          iceGatherer.state = 'gathering';
        } // RTCIceCandidate doesn't have a component, needs to be added


        cand.component = 1; // also the usernameFragment. TODO: update SDP to take both variants.

        cand.ufrag = iceGatherer.getLocalParameters().usernameFragment;
        var serializedCandidate = SDPUtils.writeCandidate(cand);
        event.candidate = Object.assign(event.candidate, SDPUtils.parseCandidate(serializedCandidate));
        event.candidate.candidate = serializedCandidate;

        event.candidate.toJSON = function () {
          return {
            candidate: event.candidate.candidate,
            sdpMid: event.candidate.sdpMid,
            sdpMLineIndex: event.candidate.sdpMLineIndex,
            usernameFragment: event.candidate.usernameFragment
          };
        };
      } // update local description.


      var sections = SDPUtils.getMediaSections(pc._localDescription.sdp);

      if (!end) {
        sections[event.candidate.sdpMLineIndex] += 'a=' + event.candidate.candidate + '\r\n';
      } else {
        sections[event.candidate.sdpMLineIndex] += 'a=end-of-candidates\r\n';
      }

      pc._localDescription.sdp = SDPUtils.getDescription(pc._localDescription.sdp) + sections.join('');
      var complete = pc.transceivers.every(function (transceiver) {
        return transceiver.iceGatherer && transceiver.iceGatherer.state === 'completed';
      });

      if (pc.iceGatheringState !== 'gathering') {
        pc.iceGatheringState = 'gathering';

        pc._emitGatheringStateChange();
      } // Emit candidate. Also emit null candidate when all gatherers are
      // complete.


      if (!end) {
        pc._dispatchEvent('icecandidate', event);
      }

      if (complete) {
        pc._dispatchEvent('icecandidate', new Event('icecandidate'));

        pc.iceGatheringState = 'complete';

        pc._emitGatheringStateChange();
      }
    }; // emit already gathered candidates.


    window.setTimeout(function () {
      bufferedCandidateEvents.forEach(function (e) {
        iceGatherer.onlocalcandidate(e);
      });
    }, 0);
  }; // Create ICE transport and DTLS transport.


  RTCPeerConnection.prototype._createIceAndDtlsTransports = function () {
    var pc = this;
    var iceTransport = new window.RTCIceTransport(null);

    iceTransport.onicestatechange = function () {
      pc._updateIceConnectionState();

      pc._updateConnectionState();
    };

    var dtlsTransport = new window.RTCDtlsTransport(iceTransport);

    dtlsTransport.ondtlsstatechange = function () {
      pc._updateConnectionState();
    };

    dtlsTransport.onerror = function () {
      // onerror does not set state to failed by itself.
      Object.defineProperty(dtlsTransport, 'state', {
        value: 'failed',
        writable: true
      });

      pc._updateConnectionState();
    };

    return {
      iceTransport: iceTransport,
      dtlsTransport: dtlsTransport
    };
  }; // Destroy ICE gatherer, ICE transport and DTLS transport.
  // Without triggering the callbacks.


  RTCPeerConnection.prototype._disposeIceAndDtlsTransports = function (sdpMLineIndex) {
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;

    if (iceGatherer) {
      delete iceGatherer.onlocalcandidate;
      delete this.transceivers[sdpMLineIndex].iceGatherer;
    }

    var iceTransport = this.transceivers[sdpMLineIndex].iceTransport;

    if (iceTransport) {
      delete iceTransport.onicestatechange;
      delete this.transceivers[sdpMLineIndex].iceTransport;
    }

    var dtlsTransport = this.transceivers[sdpMLineIndex].dtlsTransport;

    if (dtlsTransport) {
      delete dtlsTransport.ondtlsstatechange;
      delete dtlsTransport.onerror;
      delete this.transceivers[sdpMLineIndex].dtlsTransport;
    }
  }; // Start the RTP Sender and Receiver for a transceiver.


  RTCPeerConnection.prototype._transceive = function (transceiver, send, recv) {
    var params = getCommonCapabilities(transceiver.localCapabilities, transceiver.remoteCapabilities);

    if (send && transceiver.rtpSender) {
      params.encodings = transceiver.sendEncodingParameters;
      params.rtcp = {
        cname: SDPUtils.localCName,
        compound: transceiver.rtcpParameters.compound
      };

      if (transceiver.recvEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
      }

      transceiver.rtpSender.send(params);
    }

    if (recv && transceiver.rtpReceiver && params.codecs.length > 0) {
      // remove RTX field in Edge 14942
      if (transceiver.kind === 'video' && transceiver.recvEncodingParameters && edgeVersion < 15019) {
        transceiver.recvEncodingParameters.forEach(function (p) {
          delete p.rtx;
        });
      }

      if (transceiver.recvEncodingParameters.length) {
        params.encodings = transceiver.recvEncodingParameters;
      } else {
        params.encodings = [{}];
      }

      params.rtcp = {
        compound: transceiver.rtcpParameters.compound
      };

      if (transceiver.rtcpParameters.cname) {
        params.rtcp.cname = transceiver.rtcpParameters.cname;
      }

      if (transceiver.sendEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
      }

      transceiver.rtpReceiver.receive(params);
    }
  };

  RTCPeerConnection.prototype.setLocalDescription = function (description) {
    var pc = this; // Note: pranswer is not supported.

    if (['offer', 'answer'].indexOf(description.type) === -1) {
      return Promise.reject(makeError('TypeError', 'Unsupported type "' + description.type + '"'));
    }

    if (!isActionAllowedInSignalingState('setLocalDescription', description.type, pc.signalingState) || pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError', 'Can not set local ' + description.type + ' in state ' + pc.signalingState));
    }

    var sections;
    var sessionpart;

    if (description.type === 'offer') {
      // VERY limited support for SDP munging. Limited to:
      // * changing the order of codecs
      sections = SDPUtils.splitSections(description.sdp);
      sessionpart = sections.shift();
      sections.forEach(function (mediaSection, sdpMLineIndex) {
        var caps = SDPUtils.parseRtpParameters(mediaSection);
        pc.transceivers[sdpMLineIndex].localCapabilities = caps;
      });
      pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
        pc._gather(transceiver.mid, sdpMLineIndex);
      });
    } else if (description.type === 'answer') {
      sections = SDPUtils.splitSections(pc._remoteDescription.sdp);
      sessionpart = sections.shift();
      var isIceLite = SDPUtils.matchPrefix(sessionpart, 'a=ice-lite').length > 0;
      sections.forEach(function (mediaSection, sdpMLineIndex) {
        var transceiver = pc.transceivers[sdpMLineIndex];
        var iceGatherer = transceiver.iceGatherer;
        var iceTransport = transceiver.iceTransport;
        var dtlsTransport = transceiver.dtlsTransport;
        var localCapabilities = transceiver.localCapabilities;
        var remoteCapabilities = transceiver.remoteCapabilities; // treat bundle-only as not-rejected.

        var rejected = SDPUtils.isRejected(mediaSection) && SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;

        if (!rejected && !transceiver.rejected) {
          var remoteIceParameters = SDPUtils.getIceParameters(mediaSection, sessionpart);
          var remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection, sessionpart);

          if (isIceLite) {
            remoteDtlsParameters.role = 'server';
          }

          if (!pc.usingBundle || sdpMLineIndex === 0) {
            pc._gather(transceiver.mid, sdpMLineIndex);

            if (iceTransport.state === 'new') {
              iceTransport.start(iceGatherer, remoteIceParameters, isIceLite ? 'controlling' : 'controlled');
            }

            if (dtlsTransport.state === 'new') {
              dtlsTransport.start(remoteDtlsParameters);
            }
          } // Calculate intersection of capabilities.


          var params = getCommonCapabilities(localCapabilities, remoteCapabilities); // Start the RTCRtpSender. The RTCRtpReceiver for this
          // transceiver has already been started in setRemoteDescription.

          pc._transceive(transceiver, params.codecs.length > 0, false);
        }
      });
    }

    pc._localDescription = {
      type: description.type,
      sdp: description.sdp
    };

    if (description.type === 'offer') {
      pc._updateSignalingState('have-local-offer');
    } else {
      pc._updateSignalingState('stable');
    }

    return Promise.resolve();
  };

  RTCPeerConnection.prototype.setRemoteDescription = function (description) {
    var pc = this; // Note: pranswer is not supported.

    if (['offer', 'answer'].indexOf(description.type) === -1) {
      return Promise.reject(makeError('TypeError', 'Unsupported type "' + description.type + '"'));
    }

    if (!isActionAllowedInSignalingState('setRemoteDescription', description.type, pc.signalingState) || pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError', 'Can not set remote ' + description.type + ' in state ' + pc.signalingState));
    }

    var streams = {};
    pc.remoteStreams.forEach(function (stream) {
      streams[stream.id] = stream;
    });
    var receiverList = [];
    var sections = SDPUtils.splitSections(description.sdp);
    var sessionpart = sections.shift();
    var isIceLite = SDPUtils.matchPrefix(sessionpart, 'a=ice-lite').length > 0;
    var usingBundle = SDPUtils.matchPrefix(sessionpart, 'a=group:BUNDLE ').length > 0;
    pc.usingBundle = usingBundle;
    var iceOptions = SDPUtils.matchPrefix(sessionpart, 'a=ice-options:')[0];

    if (iceOptions) {
      pc.canTrickleIceCandidates = iceOptions.substr(14).split(' ').indexOf('trickle') >= 0;
    } else {
      pc.canTrickleIceCandidates = false;
    }

    sections.forEach(function (mediaSection, sdpMLineIndex) {
      var lines = SDPUtils.splitLines(mediaSection);
      var kind = SDPUtils.getKind(mediaSection); // treat bundle-only as not-rejected.

      var rejected = SDPUtils.isRejected(mediaSection) && SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;
      var protocol = lines[0].substr(2).split(' ')[2];
      var direction = SDPUtils.getDirection(mediaSection, sessionpart);
      var remoteMsid = SDPUtils.parseMsid(mediaSection);
      var mid = SDPUtils.getMid(mediaSection) || SDPUtils.generateIdentifier(); // Reject datachannels which are not implemented yet.

      if (rejected || kind === 'application' && (protocol === 'DTLS/SCTP' || protocol === 'UDP/DTLS/SCTP')) {
        // TODO: this is dangerous in the case where a non-rejected m-line
        //     becomes rejected.
        pc.transceivers[sdpMLineIndex] = {
          mid: mid,
          kind: kind,
          protocol: protocol,
          rejected: true
        };
        return;
      }

      if (!rejected && pc.transceivers[sdpMLineIndex] && pc.transceivers[sdpMLineIndex].rejected) {
        // recycle a rejected transceiver.
        pc.transceivers[sdpMLineIndex] = pc._createTransceiver(kind, true);
      }

      var transceiver;
      var iceGatherer;
      var iceTransport;
      var dtlsTransport;
      var rtpReceiver;
      var sendEncodingParameters;
      var recvEncodingParameters;
      var localCapabilities;
      var track; // FIXME: ensure the mediaSection has rtcp-mux set.

      var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
      var remoteIceParameters;
      var remoteDtlsParameters;

      if (!rejected) {
        remoteIceParameters = SDPUtils.getIceParameters(mediaSection, sessionpart);
        remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection, sessionpart);
        remoteDtlsParameters.role = 'client';
      }

      recvEncodingParameters = SDPUtils.parseRtpEncodingParameters(mediaSection);
      var rtcpParameters = SDPUtils.parseRtcpParameters(mediaSection);
      var isComplete = SDPUtils.matchPrefix(mediaSection, 'a=end-of-candidates', sessionpart).length > 0;
      var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:').map(function (cand) {
        return SDPUtils.parseCandidate(cand);
      }).filter(function (cand) {
        return cand.component === 1;
      }); // Check if we can use BUNDLE and dispose transports.

      if ((description.type === 'offer' || description.type === 'answer') && !rejected && usingBundle && sdpMLineIndex > 0 && pc.transceivers[sdpMLineIndex]) {
        pc._disposeIceAndDtlsTransports(sdpMLineIndex);

        pc.transceivers[sdpMLineIndex].iceGatherer = pc.transceivers[0].iceGatherer;
        pc.transceivers[sdpMLineIndex].iceTransport = pc.transceivers[0].iceTransport;
        pc.transceivers[sdpMLineIndex].dtlsTransport = pc.transceivers[0].dtlsTransport;

        if (pc.transceivers[sdpMLineIndex].rtpSender) {
          pc.transceivers[sdpMLineIndex].rtpSender.setTransport(pc.transceivers[0].dtlsTransport);
        }

        if (pc.transceivers[sdpMLineIndex].rtpReceiver) {
          pc.transceivers[sdpMLineIndex].rtpReceiver.setTransport(pc.transceivers[0].dtlsTransport);
        }
      }

      if (description.type === 'offer' && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex] || pc._createTransceiver(kind);
        transceiver.mid = mid;

        if (!transceiver.iceGatherer) {
          transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex, usingBundle);
        }

        if (cands.length && transceiver.iceTransport.state === 'new') {
          if (isComplete && (!usingBundle || sdpMLineIndex === 0)) {
            transceiver.iceTransport.setRemoteCandidates(cands);
          } else {
            cands.forEach(function (candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
          }
        }

        localCapabilities = window.RTCRtpReceiver.getCapabilities(kind); // filter RTX until additional stuff needed for RTX is implemented
        // in adapter.js

        if (edgeVersion < 15019) {
          localCapabilities.codecs = localCapabilities.codecs.filter(function (codec) {
            return codec.name !== 'rtx';
          });
        }

        sendEncodingParameters = transceiver.sendEncodingParameters || [{
          ssrc: (2 * sdpMLineIndex + 2) * 1001
        }]; // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams

        var isNewTrack = false;

        if (direction === 'sendrecv' || direction === 'sendonly') {
          isNewTrack = !transceiver.rtpReceiver;
          rtpReceiver = transceiver.rtpReceiver || new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);

          if (isNewTrack) {
            var stream;
            track = rtpReceiver.track; // FIXME: does not work with Plan B.

            if (remoteMsid && remoteMsid.stream === '-') {// no-op. a stream id of '-' means: no associated stream.
            } else if (remoteMsid) {
              if (!streams[remoteMsid.stream]) {
                streams[remoteMsid.stream] = new window.MediaStream();
                Object.defineProperty(streams[remoteMsid.stream], 'id', {
                  get: function get() {
                    return remoteMsid.stream;
                  }
                });
              }

              Object.defineProperty(track, 'id', {
                get: function get() {
                  return remoteMsid.track;
                }
              });
              stream = streams[remoteMsid.stream];
            } else {
              if (!streams.default) {
                streams.default = new window.MediaStream();
              }

              stream = streams.default;
            }

            if (stream) {
              addTrackToStreamAndFireEvent(track, stream);
              transceiver.associatedRemoteMediaStreams.push(stream);
            }

            receiverList.push([track, rtpReceiver, stream]);
          }
        } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track) {
          transceiver.associatedRemoteMediaStreams.forEach(function (s) {
            var nativeTrack = s.getTracks().find(function (t) {
              return t.id === transceiver.rtpReceiver.track.id;
            });

            if (nativeTrack) {
              removeTrackFromStreamAndFireEvent(nativeTrack, s);
            }
          });
          transceiver.associatedRemoteMediaStreams = [];
        }

        transceiver.localCapabilities = localCapabilities;
        transceiver.remoteCapabilities = remoteCapabilities;
        transceiver.rtpReceiver = rtpReceiver;
        transceiver.rtcpParameters = rtcpParameters;
        transceiver.sendEncodingParameters = sendEncodingParameters;
        transceiver.recvEncodingParameters = recvEncodingParameters; // Start the RTCRtpReceiver now. The RTPSender is started in
        // setLocalDescription.

        pc._transceive(pc.transceivers[sdpMLineIndex], false, isNewTrack);
      } else if (description.type === 'answer' && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex];
        iceGatherer = transceiver.iceGatherer;
        iceTransport = transceiver.iceTransport;
        dtlsTransport = transceiver.dtlsTransport;
        rtpReceiver = transceiver.rtpReceiver;
        sendEncodingParameters = transceiver.sendEncodingParameters;
        localCapabilities = transceiver.localCapabilities;
        pc.transceivers[sdpMLineIndex].recvEncodingParameters = recvEncodingParameters;
        pc.transceivers[sdpMLineIndex].remoteCapabilities = remoteCapabilities;
        pc.transceivers[sdpMLineIndex].rtcpParameters = rtcpParameters;

        if (cands.length && iceTransport.state === 'new') {
          if ((isIceLite || isComplete) && (!usingBundle || sdpMLineIndex === 0)) {
            iceTransport.setRemoteCandidates(cands);
          } else {
            cands.forEach(function (candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
          }
        }

        if (!usingBundle || sdpMLineIndex === 0) {
          if (iceTransport.state === 'new') {
            iceTransport.start(iceGatherer, remoteIceParameters, 'controlling');
          }

          if (dtlsTransport.state === 'new') {
            dtlsTransport.start(remoteDtlsParameters);
          }
        } // If the offer contained RTX but the answer did not,
        // remove RTX from sendEncodingParameters.


        var commonCapabilities = getCommonCapabilities(transceiver.localCapabilities, transceiver.remoteCapabilities);
        var hasRtx = commonCapabilities.codecs.filter(function (c) {
          return c.name.toLowerCase() === 'rtx';
        }).length;

        if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
          delete transceiver.sendEncodingParameters[0].rtx;
        }

        pc._transceive(transceiver, direction === 'sendrecv' || direction === 'recvonly', direction === 'sendrecv' || direction === 'sendonly'); // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams


        if (rtpReceiver && (direction === 'sendrecv' || direction === 'sendonly')) {
          track = rtpReceiver.track;

          if (remoteMsid) {
            if (!streams[remoteMsid.stream]) {
              streams[remoteMsid.stream] = new window.MediaStream();
            }

            addTrackToStreamAndFireEvent(track, streams[remoteMsid.stream]);
            receiverList.push([track, rtpReceiver, streams[remoteMsid.stream]]);
          } else {
            if (!streams.default) {
              streams.default = new window.MediaStream();
            }

            addTrackToStreamAndFireEvent(track, streams.default);
            receiverList.push([track, rtpReceiver, streams.default]);
          }
        } else {
          // FIXME: actually the receiver should be created later.
          delete transceiver.rtpReceiver;
        }
      }
    });

    if (pc._dtlsRole === undefined) {
      pc._dtlsRole = description.type === 'offer' ? 'active' : 'passive';
    }

    pc._remoteDescription = {
      type: description.type,
      sdp: description.sdp
    };

    if (description.type === 'offer') {
      pc._updateSignalingState('have-remote-offer');
    } else {
      pc._updateSignalingState('stable');
    }

    Object.keys(streams).forEach(function (sid) {
      var stream = streams[sid];

      if (stream.getTracks().length) {
        if (pc.remoteStreams.indexOf(stream) === -1) {
          pc.remoteStreams.push(stream);
          var event = new Event('addstream');
          event.stream = stream;
          window.setTimeout(function () {
            pc._dispatchEvent('addstream', event);
          });
        }

        receiverList.forEach(function (item) {
          var track = item[0];
          var receiver = item[1];

          if (stream.id !== item[2].id) {
            return;
          }

          fireAddTrack(pc, track, receiver, [stream]);
        });
      }
    });
    receiverList.forEach(function (item) {
      if (item[2]) {
        return;
      }

      fireAddTrack(pc, item[0], item[1], []);
    }); // check whether addIceCandidate({}) was called within four seconds after
    // setRemoteDescription.

    window.setTimeout(function () {
      if (!(pc && pc.transceivers)) {
        return;
      }

      pc.transceivers.forEach(function (transceiver) {
        if (transceiver.iceTransport && transceiver.iceTransport.state === 'new' && transceiver.iceTransport.getRemoteCandidates().length > 0) {
          console.warn('Timeout for addRemoteCandidate. Consider sending ' + 'an end-of-candidates notification');
          transceiver.iceTransport.addRemoteCandidate({});
        }
      });
    }, 4000);
    return Promise.resolve();
  };

  RTCPeerConnection.prototype.close = function () {
    this.transceivers.forEach(function (transceiver) {
      /* not yet
      if (transceiver.iceGatherer) {
        transceiver.iceGatherer.close();
      }
      */
      if (transceiver.iceTransport) {
        transceiver.iceTransport.stop();
      }

      if (transceiver.dtlsTransport) {
        transceiver.dtlsTransport.stop();
      }

      if (transceiver.rtpSender) {
        transceiver.rtpSender.stop();
      }

      if (transceiver.rtpReceiver) {
        transceiver.rtpReceiver.stop();
      }
    }); // FIXME: clean up tracks, local streams, remote streams, etc

    this._isClosed = true;

    this._updateSignalingState('closed');
  }; // Update the signaling state.


  RTCPeerConnection.prototype._updateSignalingState = function (newState) {
    this.signalingState = newState;
    var event = new Event('signalingstatechange');

    this._dispatchEvent('signalingstatechange', event);
  }; // Determine whether to fire the negotiationneeded event.


  RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function () {
    var pc = this;

    if (this.signalingState !== 'stable' || this.needNegotiation === true) {
      return;
    }

    this.needNegotiation = true;
    window.setTimeout(function () {
      if (pc.needNegotiation) {
        pc.needNegotiation = false;
        var event = new Event('negotiationneeded');

        pc._dispatchEvent('negotiationneeded', event);
      }
    }, 0);
  }; // Update the ice connection state.


  RTCPeerConnection.prototype._updateIceConnectionState = function () {
    var newState;
    var states = {
      'new': 0,
      closed: 0,
      checking: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function (transceiver) {
      if (transceiver.iceTransport && !transceiver.rejected) {
        states[transceiver.iceTransport.state]++;
      }
    });
    newState = 'new';

    if (states.failed > 0) {
      newState = 'failed';
    } else if (states.checking > 0) {
      newState = 'checking';
    } else if (states.disconnected > 0) {
      newState = 'disconnected';
    } else if (states.new > 0) {
      newState = 'new';
    } else if (states.connected > 0) {
      newState = 'connected';
    } else if (states.completed > 0) {
      newState = 'completed';
    }

    if (newState !== this.iceConnectionState) {
      this.iceConnectionState = newState;
      var event = new Event('iceconnectionstatechange');

      this._dispatchEvent('iceconnectionstatechange', event);
    }
  }; // Update the connection state.


  RTCPeerConnection.prototype._updateConnectionState = function () {
    var newState;
    var states = {
      'new': 0,
      closed: 0,
      connecting: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function (transceiver) {
      if (transceiver.iceTransport && transceiver.dtlsTransport && !transceiver.rejected) {
        states[transceiver.iceTransport.state]++;
        states[transceiver.dtlsTransport.state]++;
      }
    }); // ICETransport.completed and connected are the same for this purpose.

    states.connected += states.completed;
    newState = 'new';

    if (states.failed > 0) {
      newState = 'failed';
    } else if (states.connecting > 0) {
      newState = 'connecting';
    } else if (states.disconnected > 0) {
      newState = 'disconnected';
    } else if (states.new > 0) {
      newState = 'new';
    } else if (states.connected > 0) {
      newState = 'connected';
    }

    if (newState !== this.connectionState) {
      this.connectionState = newState;
      var event = new Event('connectionstatechange');

      this._dispatchEvent('connectionstatechange', event);
    }
  };

  RTCPeerConnection.prototype.createOffer = function () {
    var pc = this;

    if (pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError', 'Can not call createOffer after close'));
    }

    var numAudioTracks = pc.transceivers.filter(function (t) {
      return t.kind === 'audio';
    }).length;
    var numVideoTracks = pc.transceivers.filter(function (t) {
      return t.kind === 'video';
    }).length; // Determine number of audio and video tracks we need to send/recv.

    var offerOptions = arguments[0];

    if (offerOptions) {
      // Reject Chrome legacy constraints.
      if (offerOptions.mandatory || offerOptions.optional) {
        throw new TypeError('Legacy mandatory/optional constraints not supported.');
      }

      if (offerOptions.offerToReceiveAudio !== undefined) {
        if (offerOptions.offerToReceiveAudio === true) {
          numAudioTracks = 1;
        } else if (offerOptions.offerToReceiveAudio === false) {
          numAudioTracks = 0;
        } else {
          numAudioTracks = offerOptions.offerToReceiveAudio;
        }
      }

      if (offerOptions.offerToReceiveVideo !== undefined) {
        if (offerOptions.offerToReceiveVideo === true) {
          numVideoTracks = 1;
        } else if (offerOptions.offerToReceiveVideo === false) {
          numVideoTracks = 0;
        } else {
          numVideoTracks = offerOptions.offerToReceiveVideo;
        }
      }
    }

    pc.transceivers.forEach(function (transceiver) {
      if (transceiver.kind === 'audio') {
        numAudioTracks--;

        if (numAudioTracks < 0) {
          transceiver.wantReceive = false;
        }
      } else if (transceiver.kind === 'video') {
        numVideoTracks--;

        if (numVideoTracks < 0) {
          transceiver.wantReceive = false;
        }
      }
    }); // Create M-lines for recvonly streams.

    while (numAudioTracks > 0 || numVideoTracks > 0) {
      if (numAudioTracks > 0) {
        pc._createTransceiver('audio');

        numAudioTracks--;
      }

      if (numVideoTracks > 0) {
        pc._createTransceiver('video');

        numVideoTracks--;
      }
    }

    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId, pc._sdpSessionVersion++);
    pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
      // For each track, create an ice gatherer, ice transport,
      // dtls transport, potentially rtpsender and rtpreceiver.
      var track = transceiver.track;
      var kind = transceiver.kind;
      var mid = transceiver.mid || SDPUtils.generateIdentifier();
      transceiver.mid = mid;

      if (!transceiver.iceGatherer) {
        transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex, pc.usingBundle);
      }

      var localCapabilities = window.RTCRtpSender.getCapabilities(kind); // filter RTX until additional stuff needed for RTX is implemented
      // in adapter.js

      if (edgeVersion < 15019) {
        localCapabilities.codecs = localCapabilities.codecs.filter(function (codec) {
          return codec.name !== 'rtx';
        });
      }

      localCapabilities.codecs.forEach(function (codec) {
        // work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
        // by adding level-asymmetry-allowed=1
        if (codec.name === 'H264' && codec.parameters['level-asymmetry-allowed'] === undefined) {
          codec.parameters['level-asymmetry-allowed'] = '1';
        } // for subsequent offers, we might have to re-use the payload
        // type of the last offer.


        if (transceiver.remoteCapabilities && transceiver.remoteCapabilities.codecs) {
          transceiver.remoteCapabilities.codecs.forEach(function (remoteCodec) {
            if (codec.name.toLowerCase() === remoteCodec.name.toLowerCase() && codec.clockRate === remoteCodec.clockRate) {
              codec.preferredPayloadType = remoteCodec.payloadType;
            }
          });
        }
      });
      localCapabilities.headerExtensions.forEach(function (hdrExt) {
        var remoteExtensions = transceiver.remoteCapabilities && transceiver.remoteCapabilities.headerExtensions || [];
        remoteExtensions.forEach(function (rHdrExt) {
          if (hdrExt.uri === rHdrExt.uri) {
            hdrExt.id = rHdrExt.id;
          }
        });
      }); // generate an ssrc now, to be used later in rtpSender.send

      var sendEncodingParameters = transceiver.sendEncodingParameters || [{
        ssrc: (2 * sdpMLineIndex + 1) * 1001
      }];

      if (track) {
        // add RTX
        if (edgeVersion >= 15019 && kind === 'video' && !sendEncodingParameters[0].rtx) {
          sendEncodingParameters[0].rtx = {
            ssrc: sendEncodingParameters[0].ssrc + 1
          };
        }
      }

      if (transceiver.wantReceive) {
        transceiver.rtpReceiver = new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);
      }

      transceiver.localCapabilities = localCapabilities;
      transceiver.sendEncodingParameters = sendEncodingParameters;
    }); // always offer BUNDLE and dispose on return if not supported.

    if (pc._config.bundlePolicy !== 'max-compat') {
      sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function (t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }

    sdp += 'a=ice-options:trickle\r\n';
    pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
      sdp += writeMediaSection(transceiver, transceiver.localCapabilities, 'offer', transceiver.stream, pc._dtlsRole);
      sdp += 'a=rtcp-rsize\r\n';

      if (transceiver.iceGatherer && pc.iceGatheringState !== 'new' && (sdpMLineIndex === 0 || !pc.usingBundle)) {
        transceiver.iceGatherer.getLocalCandidates().forEach(function (cand) {
          cand.component = 1;
          sdp += 'a=' + SDPUtils.writeCandidate(cand) + '\r\n';
        });

        if (transceiver.iceGatherer.state === 'completed') {
          sdp += 'a=end-of-candidates\r\n';
        }
      }
    });
    var desc = new window.RTCSessionDescription({
      type: 'offer',
      sdp: sdp
    });
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.createAnswer = function () {
    var pc = this;

    if (pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError', 'Can not call createAnswer after close'));
    }

    if (!(pc.signalingState === 'have-remote-offer' || pc.signalingState === 'have-local-pranswer')) {
      return Promise.reject(makeError('InvalidStateError', 'Can not call createAnswer in signalingState ' + pc.signalingState));
    }

    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId, pc._sdpSessionVersion++);

    if (pc.usingBundle) {
      sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function (t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }

    sdp += 'a=ice-options:trickle\r\n';
    var mediaSectionsInOffer = SDPUtils.getMediaSections(pc._remoteDescription.sdp).length;
    pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
      if (sdpMLineIndex + 1 > mediaSectionsInOffer) {
        return;
      }

      if (transceiver.rejected) {
        if (transceiver.kind === 'application') {
          if (transceiver.protocol === 'DTLS/SCTP') {
            // legacy fmt
            sdp += 'm=application 0 DTLS/SCTP 5000\r\n';
          } else {
            sdp += 'm=application 0 ' + transceiver.protocol + ' webrtc-datachannel\r\n';
          }
        } else if (transceiver.kind === 'audio') {
          sdp += 'm=audio 0 UDP/TLS/RTP/SAVPF 0\r\n' + 'a=rtpmap:0 PCMU/8000\r\n';
        } else if (transceiver.kind === 'video') {
          sdp += 'm=video 0 UDP/TLS/RTP/SAVPF 120\r\n' + 'a=rtpmap:120 VP8/90000\r\n';
        }

        sdp += 'c=IN IP4 0.0.0.0\r\n' + 'a=inactive\r\n' + 'a=mid:' + transceiver.mid + '\r\n';
        return;
      } // FIXME: look at direction.


      if (transceiver.stream) {
        var localTrack;

        if (transceiver.kind === 'audio') {
          localTrack = transceiver.stream.getAudioTracks()[0];
        } else if (transceiver.kind === 'video') {
          localTrack = transceiver.stream.getVideoTracks()[0];
        }

        if (localTrack) {
          // add RTX
          if (edgeVersion >= 15019 && transceiver.kind === 'video' && !transceiver.sendEncodingParameters[0].rtx) {
            transceiver.sendEncodingParameters[0].rtx = {
              ssrc: transceiver.sendEncodingParameters[0].ssrc + 1
            };
          }
        }
      } // Calculate intersection of capabilities.


      var commonCapabilities = getCommonCapabilities(transceiver.localCapabilities, transceiver.remoteCapabilities);
      var hasRtx = commonCapabilities.codecs.filter(function (c) {
        return c.name.toLowerCase() === 'rtx';
      }).length;

      if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
        delete transceiver.sendEncodingParameters[0].rtx;
      }

      sdp += writeMediaSection(transceiver, commonCapabilities, 'answer', transceiver.stream, pc._dtlsRole);

      if (transceiver.rtcpParameters && transceiver.rtcpParameters.reducedSize) {
        sdp += 'a=rtcp-rsize\r\n';
      }
    });
    var desc = new window.RTCSessionDescription({
      type: 'answer',
      sdp: sdp
    });
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.addIceCandidate = function (candidate) {
    var pc = this;
    var sections;

    if (candidate && !(candidate.sdpMLineIndex !== undefined || candidate.sdpMid)) {
      return Promise.reject(new TypeError('sdpMLineIndex or sdpMid required'));
    } // TODO: needs to go into ops queue.


    return new Promise(function (resolve, reject) {
      if (!pc._remoteDescription) {
        return reject(makeError('InvalidStateError', 'Can not add ICE candidate without a remote description'));
      } else if (!candidate || candidate.candidate === '') {
        for (var j = 0; j < pc.transceivers.length; j++) {
          if (pc.transceivers[j].rejected) {
            continue;
          }

          pc.transceivers[j].iceTransport.addRemoteCandidate({});
          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
          sections[j] += 'a=end-of-candidates\r\n';
          pc._remoteDescription.sdp = SDPUtils.getDescription(pc._remoteDescription.sdp) + sections.join('');

          if (pc.usingBundle) {
            break;
          }
        }
      } else {
        var sdpMLineIndex = candidate.sdpMLineIndex;

        if (candidate.sdpMid) {
          for (var i = 0; i < pc.transceivers.length; i++) {
            if (pc.transceivers[i].mid === candidate.sdpMid) {
              sdpMLineIndex = i;
              break;
            }
          }
        }

        var transceiver = pc.transceivers[sdpMLineIndex];

        if (transceiver) {
          if (transceiver.rejected) {
            return resolve();
          }

          var cand = Object.keys(candidate.candidate).length > 0 ? SDPUtils.parseCandidate(candidate.candidate) : {}; // Ignore Chrome's invalid candidates since Edge does not like them.

          if (cand.protocol === 'tcp' && (cand.port === 0 || cand.port === 9)) {
            return resolve();
          } // Ignore RTCP candidates, we assume RTCP-MUX.


          if (cand.component && cand.component !== 1) {
            return resolve();
          } // when using bundle, avoid adding candidates to the wrong
          // ice transport. And avoid adding candidates added in the SDP.


          if (sdpMLineIndex === 0 || sdpMLineIndex > 0 && transceiver.iceTransport !== pc.transceivers[0].iceTransport) {
            if (!maybeAddCandidate(transceiver.iceTransport, cand)) {
              return reject(makeError('OperationError', 'Can not add ICE candidate'));
            }
          } // update the remoteDescription.


          var candidateString = candidate.candidate.trim();

          if (candidateString.indexOf('a=') === 0) {
            candidateString = candidateString.substr(2);
          }

          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
          sections[sdpMLineIndex] += 'a=' + (cand.type ? candidateString : 'end-of-candidates') + '\r\n';
          pc._remoteDescription.sdp = SDPUtils.getDescription(pc._remoteDescription.sdp) + sections.join('');
        } else {
          return reject(makeError('OperationError', 'Can not add ICE candidate'));
        }
      }

      resolve();
    });
  };

  RTCPeerConnection.prototype.getStats = function (selector) {
    if (selector && selector instanceof window.MediaStreamTrack) {
      var senderOrReceiver = null;
      this.transceivers.forEach(function (transceiver) {
        if (transceiver.rtpSender && transceiver.rtpSender.track === selector) {
          senderOrReceiver = transceiver.rtpSender;
        } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track === selector) {
          senderOrReceiver = transceiver.rtpReceiver;
        }
      });

      if (!senderOrReceiver) {
        throw makeError('InvalidAccessError', 'Invalid selector.');
      }

      return senderOrReceiver.getStats();
    }

    var promises = [];
    this.transceivers.forEach(function (transceiver) {
      ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport', 'dtlsTransport'].forEach(function (method) {
        if (transceiver[method]) {
          promises.push(transceiver[method].getStats());
        }
      });
    });
    return Promise.all(promises).then(function (allStats) {
      var results = new Map();
      allStats.forEach(function (stats) {
        stats.forEach(function (stat) {
          results.set(stat.id, stat);
        });
      });
      return results;
    });
  }; // fix low-level stat names and return Map instead of object.


  var ortcObjects = ['RTCRtpSender', 'RTCRtpReceiver', 'RTCIceGatherer', 'RTCIceTransport', 'RTCDtlsTransport'];
  ortcObjects.forEach(function (ortcObjectName) {
    var obj = window[ortcObjectName];

    if (obj && obj.prototype && obj.prototype.getStats) {
      var nativeGetstats = obj.prototype.getStats;

      obj.prototype.getStats = function () {
        return nativeGetstats.apply(this).then(function (nativeStats) {
          var mapStats = new Map();
          Object.keys(nativeStats).forEach(function (id) {
            nativeStats[id].type = fixStatsType(nativeStats[id]);
            mapStats.set(id, nativeStats[id]);
          });
          return mapStats;
        });
      };
    }
  }); // legacy callback shims. Should be moved to adapter.js some days.

  var methods = ['createOffer', 'createAnswer'];
  methods.forEach(function (method) {
    var nativeMethod = RTCPeerConnection.prototype[method];

    RTCPeerConnection.prototype[method] = function () {
      var args = arguments;

      if (typeof args[0] === 'function' || typeof args[1] === 'function') {
        // legacy
        return nativeMethod.apply(this, [arguments[2]]).then(function (description) {
          if (typeof args[0] === 'function') {
            args[0].apply(null, [description]);
          }
        }, function (error) {
          if (typeof args[1] === 'function') {
            args[1].apply(null, [error]);
          }
        });
      }

      return nativeMethod.apply(this, arguments);
    };
  });
  methods = ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'];
  methods.forEach(function (method) {
    var nativeMethod = RTCPeerConnection.prototype[method];

    RTCPeerConnection.prototype[method] = function () {
      var args = arguments;

      if (typeof args[1] === 'function' || typeof args[2] === 'function') {
        // legacy
        return nativeMethod.apply(this, arguments).then(function () {
          if (typeof args[1] === 'function') {
            args[1].apply(null);
          }
        }, function (error) {
          if (typeof args[2] === 'function') {
            args[2].apply(null, [error]);
          }
        });
      }

      return nativeMethod.apply(this, arguments);
    };
  }); // getStats is special. It doesn't have a spec legacy method yet we support
  // getStats(something, cb) without error callbacks.

  ['getStats'].forEach(function (method) {
    var nativeMethod = RTCPeerConnection.prototype[method];

    RTCPeerConnection.prototype[method] = function () {
      var args = arguments;

      if (typeof args[1] === 'function') {
        return nativeMethod.apply(this, arguments).then(function () {
          if (typeof args[1] === 'function') {
            args[1].apply(null);
          }
        });
      }

      return nativeMethod.apply(this, arguments);
    };
  });
  return RTCPeerConnection;
};

/***/ }),

/***/ "A8Ja":
/*!**********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/chrome/getdisplaymedia.js ***!
  \**********************************************************************/
/*! exports provided: shimGetDisplayMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetDisplayMedia", function() { return shimGetDisplayMedia; });
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


function shimGetDisplayMedia(window, getSourceId) {
  if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }

  if (!window.navigator.mediaDevices) {
    return;
  } // getSourceId is a function that returns a promise resolving with
  // the sourceId of the screen/window/tab to be shared.


  if (typeof getSourceId !== 'function') {
    console.error('shimGetDisplayMedia: getSourceId argument is not ' + 'a function');
    return;
  }

  window.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
    return getSourceId(constraints).then(function (sourceId) {
      var widthSpecified = constraints.video && constraints.video.width;
      var heightSpecified = constraints.video && constraints.video.height;
      var frameRateSpecified = constraints.video && constraints.video.frameRate;
      constraints.video = {
        mandatory: {
          chromeMediaSource: 'desktop',
          chromeMediaSourceId: sourceId,
          maxFrameRate: frameRateSpecified || 3
        }
      };

      if (widthSpecified) {
        constraints.video.mandatory.maxWidth = widthSpecified;
      }

      if (heightSpecified) {
        constraints.video.mandatory.maxHeight = heightSpecified;
      }

      return window.navigator.mediaDevices.getUserMedia(constraints);
    });
  };
}

/***/ }),

/***/ "GAh6":
/*!***************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/adapter_factory.js ***!
  \***************************************************************/
/*! exports provided: adapterFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapterFactory", function() { return adapterFactory; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "lVut");
/* harmony import */ var _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chrome/chrome_shim */ "+phH");
/* harmony import */ var _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edge/edge_shim */ "sJPo");
/* harmony import */ var _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firefox/firefox_shim */ "Mupt");
/* harmony import */ var _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./safari/safari_shim */ "goMv");
/* harmony import */ var _common_shim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common_shim */ "ggQn");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 // Browser shims.





 // Shimming starts here.

function adapterFactory() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      window = _ref.window;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    shimChrome: true,
    shimFirefox: true,
    shimEdge: true,
    shimSafari: true
  };
  // Utils.
  var logging = _utils__WEBPACK_IMPORTED_MODULE_0__["log"];
  var browserDetails = _utils__WEBPACK_IMPORTED_MODULE_0__["detectBrowser"](window);
  var adapter = {
    browserDetails: browserDetails,
    commonShim: _common_shim__WEBPACK_IMPORTED_MODULE_5__,
    extractVersion: _utils__WEBPACK_IMPORTED_MODULE_0__["extractVersion"],
    disableLog: _utils__WEBPACK_IMPORTED_MODULE_0__["disableLog"],
    disableWarnings: _utils__WEBPACK_IMPORTED_MODULE_0__["disableWarnings"]
  }; // Shim browser if found.

  switch (browserDetails.browser) {
    case 'chrome':
      if (!_chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__ || !_chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimPeerConnection"] || !options.shimChrome) {
        logging('Chrome shim is not included in this adapter release.');
        return adapter;
      }

      if (browserDetails.version === null) {
        logging('Chrome shim can not determine version, not shimming.');
        return adapter;
      }

      logging('adapter.js shimming chrome.'); // Export to the adapter global object visible in the browser.

      adapter.browserShim = _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__;
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimGetUserMedia"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimMediaStream"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimPeerConnection"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimOnTrack"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimAddTrackRemoveTrack"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimGetSendersWithDtmf"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimGetStats"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimSenderReceiverGetStats"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["fixNegotiationNeeded"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimRTCIceCandidate"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimConnectionState"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimMaxMessageSize"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimSendThrowTypeError"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["removeAllowExtmapMixed"](window);
      break;

    case 'firefox':
      if (!_firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__ || !_firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimPeerConnection"] || !options.shimFirefox) {
        logging('Firefox shim is not included in this adapter release.');
        return adapter;
      }

      logging('adapter.js shimming firefox.'); // Export to the adapter global object visible in the browser.

      adapter.browserShim = _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__;
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimGetUserMedia"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimPeerConnection"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimOnTrack"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimRemoveStream"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimSenderGetStats"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimReceiverGetStats"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimRTCDataChannel"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimAddTransceiver"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimGetParameters"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimCreateOffer"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimCreateAnswer"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimRTCIceCandidate"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimConnectionState"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimMaxMessageSize"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimSendThrowTypeError"](window);
      break;

    case 'edge':
      if (!_edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__ || !_edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__["shimPeerConnection"] || !options.shimEdge) {
        logging('MS edge shim is not included in this adapter release.');
        return adapter;
      }

      logging('adapter.js shimming edge.'); // Export to the adapter global object visible in the browser.

      adapter.browserShim = _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__;
      _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__["shimGetUserMedia"](window);
      _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__["shimGetDisplayMedia"](window);
      _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__["shimPeerConnection"](window);
      _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__["shimReplaceTrack"](window); // the edge shim implements the full RTCIceCandidate object.

      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimMaxMessageSize"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimSendThrowTypeError"](window);
      break;

    case 'safari':
      if (!_safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__ || !options.shimSafari) {
        logging('Safari shim is not included in this adapter release.');
        return adapter;
      }

      logging('adapter.js shimming safari.'); // Export to the adapter global object visible in the browser.

      adapter.browserShim = _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__;
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimRTCIceServerUrls"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimCreateOfferLegacy"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimCallbacksAPI"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimLocalStreamsAPI"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimRemoteStreamsAPI"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimTrackEventTransceiver"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimGetUserMedia"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimAudioContext"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimRTCIceCandidate"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimMaxMessageSize"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimSendThrowTypeError"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["removeAllowExtmapMixed"](window);
      break;

    default:
      logging('Unsupported browser!');
      break;
  }

  return adapter;
}

/***/ }),

/***/ "KCt4":
/*!*********************************!*\
  !*** ./node_modules/sdp/sdp.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-env node */
 // SDP helpers.

var SDPUtils = {}; // Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883

SDPUtils.generateIdentifier = function () {
  return Math.random().toString(36).substr(2, 10);
}; // The RTCP CNAME used by all peerconnections from the same JS.


SDPUtils.localCName = SDPUtils.generateIdentifier(); // Splits SDP into lines, dealing with both CRLF and LF.

SDPUtils.splitLines = function (blob) {
  return blob.trim().split('\n').map(function (line) {
    return line.trim();
  });
}; // Splits SDP into sessionpart and mediasections. Ensures CRLF.


SDPUtils.splitSections = function (blob) {
  var parts = blob.split('\nm=');
  return parts.map(function (part, index) {
    return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
  });
}; // returns the session description.


SDPUtils.getDescription = function (blob) {
  var sections = SDPUtils.splitSections(blob);
  return sections && sections[0];
}; // returns the individual media sections.


SDPUtils.getMediaSections = function (blob) {
  var sections = SDPUtils.splitSections(blob);
  sections.shift();
  return sections;
}; // Returns lines that start with a certain prefix.


SDPUtils.matchPrefix = function (blob, prefix) {
  return SDPUtils.splitLines(blob).filter(function (line) {
    return line.indexOf(prefix) === 0;
  });
}; // Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"


SDPUtils.parseCandidate = function (line) {
  var parts; // Parse both variants.

  if (line.indexOf('a=candidate:') === 0) {
    parts = line.substring(12).split(' ');
  } else {
    parts = line.substring(10).split(' ');
  }

  var candidate = {
    foundation: parts[0],
    component: parseInt(parts[1], 10),
    protocol: parts[2].toLowerCase(),
    priority: parseInt(parts[3], 10),
    ip: parts[4],
    address: parts[4],
    // address is an alias for ip.
    port: parseInt(parts[5], 10),
    // skip parts[6] == 'typ'
    type: parts[7]
  };

  for (var i = 8; i < parts.length; i += 2) {
    switch (parts[i]) {
      case 'raddr':
        candidate.relatedAddress = parts[i + 1];
        break;

      case 'rport':
        candidate.relatedPort = parseInt(parts[i + 1], 10);
        break;

      case 'tcptype':
        candidate.tcpType = parts[i + 1];
        break;

      case 'ufrag':
        candidate.ufrag = parts[i + 1]; // for backward compability.

        candidate.usernameFragment = parts[i + 1];
        break;

      default:
        // extension handling, in particular ufrag
        candidate[parts[i]] = parts[i + 1];
        break;
    }
  }

  return candidate;
}; // Translates a candidate object into SDP candidate attribute.


SDPUtils.writeCandidate = function (candidate) {
  var sdp = [];
  sdp.push(candidate.foundation);
  sdp.push(candidate.component);
  sdp.push(candidate.protocol.toUpperCase());
  sdp.push(candidate.priority);
  sdp.push(candidate.address || candidate.ip);
  sdp.push(candidate.port);
  var type = candidate.type;
  sdp.push('typ');
  sdp.push(type);

  if (type !== 'host' && candidate.relatedAddress && candidate.relatedPort) {
    sdp.push('raddr');
    sdp.push(candidate.relatedAddress);
    sdp.push('rport');
    sdp.push(candidate.relatedPort);
  }

  if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
    sdp.push('tcptype');
    sdp.push(candidate.tcpType);
  }

  if (candidate.usernameFragment || candidate.ufrag) {
    sdp.push('ufrag');
    sdp.push(candidate.usernameFragment || candidate.ufrag);
  }

  return 'candidate:' + sdp.join(' ');
}; // Parses an ice-options line, returns an array of option tags.
// a=ice-options:foo bar


SDPUtils.parseIceOptions = function (line) {
  return line.substr(14).split(' ');
}; // Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2


SDPUtils.parseRtpMap = function (line) {
  var parts = line.substr(9).split(' ');
  var parsed = {
    payloadType: parseInt(parts.shift(), 10) // was: id

  };
  parts = parts[0].split('/');
  parsed.name = parts[0];
  parsed.clockRate = parseInt(parts[1], 10); // was: clockrate

  parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1; // legacy alias, got renamed back to channels in ORTC.

  parsed.numChannels = parsed.channels;
  return parsed;
}; // Generate an a=rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.


SDPUtils.writeRtpMap = function (codec) {
  var pt = codec.payloadType;

  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }

  var channels = codec.channels || codec.numChannels || 1;
  return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate + (channels !== 1 ? '/' + channels : '') + '\r\n';
}; // Parses an a=extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset


SDPUtils.parseExtmap = function (line) {
  var parts = line.substr(9).split(' ');
  return {
    id: parseInt(parts[0], 10),
    direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
    uri: parts[1]
  };
}; // Generates a=extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.


SDPUtils.writeExtmap = function (headerExtension) {
  return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) + (headerExtension.direction && headerExtension.direction !== 'sendrecv' ? '/' + headerExtension.direction : '') + ' ' + headerExtension.uri + '\r\n';
}; // Parses an ftmp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on


SDPUtils.parseFmtp = function (line) {
  var parsed = {};
  var kv;
  var parts = line.substr(line.indexOf(' ') + 1).split(';');

  for (var j = 0; j < parts.length; j++) {
    kv = parts[j].trim().split('=');
    parsed[kv[0].trim()] = kv[1];
  }

  return parsed;
}; // Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.


SDPUtils.writeFmtp = function (codec) {
  var line = '';
  var pt = codec.payloadType;

  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }

  if (codec.parameters && Object.keys(codec.parameters).length) {
    var params = [];
    Object.keys(codec.parameters).forEach(function (param) {
      if (codec.parameters[param]) {
        params.push(param + '=' + codec.parameters[param]);
      } else {
        params.push(param);
      }
    });
    line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
  }

  return line;
}; // Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi


SDPUtils.parseRtcpFb = function (line) {
  var parts = line.substr(line.indexOf(' ') + 1).split(' ');
  return {
    type: parts.shift(),
    parameter: parts.join(' ')
  };
}; // Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.


SDPUtils.writeRtcpFb = function (codec) {
  var lines = '';
  var pt = codec.payloadType;

  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }

  if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
    // FIXME: special handling for trr-int?
    codec.rtcpFeedback.forEach(function (fb) {
      lines += 'a=rtcp-fb:' + pt + ' ' + fb.type + (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') + '\r\n';
    });
  }

  return lines;
}; // Parses an RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something


SDPUtils.parseSsrcMedia = function (line) {
  var sp = line.indexOf(' ');
  var parts = {
    ssrc: parseInt(line.substr(7, sp - 7), 10)
  };
  var colon = line.indexOf(':', sp);

  if (colon > -1) {
    parts.attribute = line.substr(sp + 1, colon - sp - 1);
    parts.value = line.substr(colon + 1);
  } else {
    parts.attribute = line.substr(sp + 1);
  }

  return parts;
};

SDPUtils.parseSsrcGroup = function (line) {
  var parts = line.substr(13).split(' ');
  return {
    semantics: parts.shift(),
    ssrcs: parts.map(function (ssrc) {
      return parseInt(ssrc, 10);
    })
  };
}; // Extracts the MID (RFC 5888) from a media section.
// returns the MID or undefined if no mid line was found.


SDPUtils.getMid = function (mediaSection) {
  var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];

  if (mid) {
    return mid.substr(6);
  }
};

SDPUtils.parseFingerprint = function (line) {
  var parts = line.substr(14).split(' ');
  return {
    algorithm: parts[0].toLowerCase(),
    // algorithm is case-sensitive in Edge.
    value: parts[1]
  };
}; // Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.


SDPUtils.getDtlsParameters = function (mediaSection, sessionpart) {
  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=fingerprint:'); // Note: a=setup line is ignored since we use the 'auto' role.
  // Note2: 'algorithm' is not case sensitive except in Edge.

  return {
    role: 'auto',
    fingerprints: lines.map(SDPUtils.parseFingerprint)
  };
}; // Serializes DTLS parameters to SDP.


SDPUtils.writeDtlsParameters = function (params, setupType) {
  var sdp = 'a=setup:' + setupType + '\r\n';
  params.fingerprints.forEach(function (fp) {
    sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
  });
  return sdp;
}; // Parses a=crypto lines into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#dictionary-rtcsrtpsdesparameters-members


SDPUtils.parseCryptoLine = function (line) {
  var parts = line.substr(9).split(' ');
  return {
    tag: parseInt(parts[0], 10),
    cryptoSuite: parts[1],
    keyParams: parts[2],
    sessionParams: parts.slice(3)
  };
};

SDPUtils.writeCryptoLine = function (parameters) {
  return 'a=crypto:' + parameters.tag + ' ' + parameters.cryptoSuite + ' ' + (typeof parameters.keyParams === 'object' ? SDPUtils.writeCryptoKeyParams(parameters.keyParams) : parameters.keyParams) + (parameters.sessionParams ? ' ' + parameters.sessionParams.join(' ') : '') + '\r\n';
}; // Parses the crypto key parameters into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#rtcsrtpkeyparam*


SDPUtils.parseCryptoKeyParams = function (keyParams) {
  if (keyParams.indexOf('inline:') !== 0) {
    return null;
  }

  var parts = keyParams.substr(7).split('|');
  return {
    keyMethod: 'inline',
    keySalt: parts[0],
    lifeTime: parts[1],
    mkiValue: parts[2] ? parts[2].split(':')[0] : undefined,
    mkiLength: parts[2] ? parts[2].split(':')[1] : undefined
  };
};

SDPUtils.writeCryptoKeyParams = function (keyParams) {
  return keyParams.keyMethod + ':' + keyParams.keySalt + (keyParams.lifeTime ? '|' + keyParams.lifeTime : '') + (keyParams.mkiValue && keyParams.mkiLength ? '|' + keyParams.mkiValue + ':' + keyParams.mkiLength : '');
}; // Extracts all SDES paramters.


SDPUtils.getCryptoParameters = function (mediaSection, sessionpart) {
  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=crypto:');
  return lines.map(SDPUtils.parseCryptoLine);
}; // Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.


SDPUtils.getIceParameters = function (mediaSection, sessionpart) {
  var ufrag = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=ice-ufrag:')[0];
  var pwd = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=ice-pwd:')[0];

  if (!(ufrag && pwd)) {
    return null;
  }

  return {
    usernameFragment: ufrag.substr(12),
    password: pwd.substr(10)
  };
}; // Serializes ICE parameters to SDP.


SDPUtils.writeIceParameters = function (params) {
  return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' + 'a=ice-pwd:' + params.password + '\r\n';
}; // Parses the SDP media section and returns RTCRtpParameters.


SDPUtils.parseRtpParameters = function (mediaSection) {
  var description = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: [],
    rtcp: []
  };
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');

  for (var i = 3; i < mline.length; i++) {
    // find all codecs from mline[3..]
    var pt = mline[i];
    var rtpmapline = SDPUtils.matchPrefix(mediaSection, 'a=rtpmap:' + pt + ' ')[0];

    if (rtpmapline) {
      var codec = SDPUtils.parseRtpMap(rtpmapline);
      var fmtps = SDPUtils.matchPrefix(mediaSection, 'a=fmtp:' + pt + ' '); // Only the first a=fmtp:<pt> is considered.

      codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
      codec.rtcpFeedback = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-fb:' + pt + ' ').map(SDPUtils.parseRtcpFb);
      description.codecs.push(codec); // parse FEC mechanisms from rtpmap lines.

      switch (codec.name.toUpperCase()) {
        case 'RED':
        case 'ULPFEC':
          description.fecMechanisms.push(codec.name.toUpperCase());
          break;

        default:
          // only RED and ULPFEC are recognized as FEC mechanisms.
          break;
      }
    }
  }

  SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function (line) {
    description.headerExtensions.push(SDPUtils.parseExtmap(line));
  }); // FIXME: parse rtcp.

  return description;
}; // Generates parts of the SDP media section describing the capabilities /
// parameters.


SDPUtils.writeRtpDescription = function (kind, caps) {
  var sdp = ''; // Build the mline.

  sdp += 'm=' + kind + ' ';
  sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.

  sdp += ' UDP/TLS/RTP/SAVPF ';
  sdp += caps.codecs.map(function (codec) {
    if (codec.preferredPayloadType !== undefined) {
      return codec.preferredPayloadType;
    }

    return codec.payloadType;
  }).join(' ') + '\r\n';
  sdp += 'c=IN IP4 0.0.0.0\r\n';
  sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n'; // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.

  caps.codecs.forEach(function (codec) {
    sdp += SDPUtils.writeRtpMap(codec);
    sdp += SDPUtils.writeFmtp(codec);
    sdp += SDPUtils.writeRtcpFb(codec);
  });
  var maxptime = 0;
  caps.codecs.forEach(function (codec) {
    if (codec.maxptime > maxptime) {
      maxptime = codec.maxptime;
    }
  });

  if (maxptime > 0) {
    sdp += 'a=maxptime:' + maxptime + '\r\n';
  }

  sdp += 'a=rtcp-mux\r\n';

  if (caps.headerExtensions) {
    caps.headerExtensions.forEach(function (extension) {
      sdp += SDPUtils.writeExtmap(extension);
    });
  } // FIXME: write fecMechanisms.


  return sdp;
}; // Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.


SDPUtils.parseRtpEncodingParameters = function (mediaSection) {
  var encodingParameters = [];
  var description = SDPUtils.parseRtpParameters(mediaSection);
  var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
  var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1; // filter a=ssrc:... cname:, ignore PlanB-msid

  var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
    return SDPUtils.parseSsrcMedia(line);
  }).filter(function (parts) {
    return parts.attribute === 'cname';
  });
  var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
  var secondarySsrc;
  var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID').map(function (line) {
    var parts = line.substr(17).split(' ');
    return parts.map(function (part) {
      return parseInt(part, 10);
    });
  });

  if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
    secondarySsrc = flows[0][1];
  }

  description.codecs.forEach(function (codec) {
    if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
      var encParam = {
        ssrc: primarySsrc,
        codecPayloadType: parseInt(codec.parameters.apt, 10)
      };

      if (primarySsrc && secondarySsrc) {
        encParam.rtx = {
          ssrc: secondarySsrc
        };
      }

      encodingParameters.push(encParam);

      if (hasRed) {
        encParam = JSON.parse(JSON.stringify(encParam));
        encParam.fec = {
          ssrc: primarySsrc,
          mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
        };
        encodingParameters.push(encParam);
      }
    }
  });

  if (encodingParameters.length === 0 && primarySsrc) {
    encodingParameters.push({
      ssrc: primarySsrc
    });
  } // we support both b=AS and b=TIAS but interpret AS as TIAS.


  var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');

  if (bandwidth.length) {
    if (bandwidth[0].indexOf('b=TIAS:') === 0) {
      bandwidth = parseInt(bandwidth[0].substr(7), 10);
    } else if (bandwidth[0].indexOf('b=AS:') === 0) {
      // use formula from JSEP to convert b=AS to TIAS value.
      bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95 - 50 * 40 * 8;
    } else {
      bandwidth = undefined;
    }

    encodingParameters.forEach(function (params) {
      params.maxBitrate = bandwidth;
    });
  }

  return encodingParameters;
}; // parses http://draft.ortc.org/#rtcrtcpparameters*


SDPUtils.parseRtcpParameters = function (mediaSection) {
  var rtcpParameters = {}; // Gets the first SSRC. Note tha with RTX there might be multiple
  // SSRCs.

  var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
    return SDPUtils.parseSsrcMedia(line);
  }).filter(function (obj) {
    return obj.attribute === 'cname';
  })[0];

  if (remoteSsrc) {
    rtcpParameters.cname = remoteSsrc.value;
    rtcpParameters.ssrc = remoteSsrc.ssrc;
  } // Edge uses the compound attribute instead of reducedSize
  // compound is !reducedSize


  var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
  rtcpParameters.reducedSize = rsize.length > 0;
  rtcpParameters.compound = rsize.length === 0; // parses the rtcp-mux attrіbute.
  // Note that Edge does not support unmuxed RTCP.

  var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
  rtcpParameters.mux = mux.length > 0;
  return rtcpParameters;
}; // parses either a=msid: or a=ssrc:... msid lines and returns
// the id of the MediaStream and MediaStreamTrack.


SDPUtils.parseMsid = function (mediaSection) {
  var parts;
  var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');

  if (spec.length === 1) {
    parts = spec[0].substr(7).split(' ');
    return {
      stream: parts[0],
      track: parts[1]
    };
  }

  var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
    return SDPUtils.parseSsrcMedia(line);
  }).filter(function (msidParts) {
    return msidParts.attribute === 'msid';
  });

  if (planB.length > 0) {
    parts = planB[0].value.split(' ');
    return {
      stream: parts[0],
      track: parts[1]
    };
  }
}; // SCTP
// parses draft-ietf-mmusic-sctp-sdp-26 first and falls back
// to draft-ietf-mmusic-sctp-sdp-05


SDPUtils.parseSctpDescription = function (mediaSection) {
  var mline = SDPUtils.parseMLine(mediaSection);
  var maxSizeLine = SDPUtils.matchPrefix(mediaSection, 'a=max-message-size:');
  var maxMessageSize;

  if (maxSizeLine.length > 0) {
    maxMessageSize = parseInt(maxSizeLine[0].substr(19), 10);
  }

  if (isNaN(maxMessageSize)) {
    maxMessageSize = 65536;
  }

  var sctpPort = SDPUtils.matchPrefix(mediaSection, 'a=sctp-port:');

  if (sctpPort.length > 0) {
    return {
      port: parseInt(sctpPort[0].substr(12), 10),
      protocol: mline.fmt,
      maxMessageSize: maxMessageSize
    };
  }

  var sctpMapLines = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:');

  if (sctpMapLines.length > 0) {
    var parts = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:')[0].substr(10).split(' ');
    return {
      port: parseInt(parts[0], 10),
      protocol: parts[1],
      maxMessageSize: maxMessageSize
    };
  }
}; // SCTP
// outputs the draft-ietf-mmusic-sctp-sdp-26 version that all browsers
// support by now receiving in this format, unless we originally parsed
// as the draft-ietf-mmusic-sctp-sdp-05 format (indicated by the m-line
// protocol of DTLS/SCTP -- without UDP/ or TCP/)


SDPUtils.writeSctpDescription = function (media, sctp) {
  var output = [];

  if (media.protocol !== 'DTLS/SCTP') {
    output = ['m=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.protocol + '\r\n', 'c=IN IP4 0.0.0.0\r\n', 'a=sctp-port:' + sctp.port + '\r\n'];
  } else {
    output = ['m=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.port + '\r\n', 'c=IN IP4 0.0.0.0\r\n', 'a=sctpmap:' + sctp.port + ' ' + sctp.protocol + ' 65535\r\n'];
  }

  if (sctp.maxMessageSize !== undefined) {
    output.push('a=max-message-size:' + sctp.maxMessageSize + '\r\n');
  }

  return output.join('');
}; // Generate a session ID for SDP.
// https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
// recommends using a cryptographically random +ve 64-bit value
// but right now this should be acceptable and within the right range


SDPUtils.generateSessionId = function () {
  return Math.random().toString().substr(2, 21);
}; // Write boilder plate for start of SDP
// sessId argument is optional - if not supplied it will
// be generated randomly
// sessVersion is optional and defaults to 2
// sessUser is optional and defaults to 'thisisadapterortc'


SDPUtils.writeSessionBoilerplate = function (sessId, sessVer, sessUser) {
  var sessionId;
  var version = sessVer !== undefined ? sessVer : 2;

  if (sessId) {
    sessionId = sessId;
  } else {
    sessionId = SDPUtils.generateSessionId();
  }

  var user = sessUser || 'thisisadapterortc'; // FIXME: sess-id should be an NTP timestamp.

  return 'v=0\r\n' + 'o=' + user + ' ' + sessionId + ' ' + version + ' IN IP4 127.0.0.1\r\n' + 's=-\r\n' + 't=0 0\r\n';
};

SDPUtils.writeMediaSection = function (transceiver, caps, type, stream) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps); // Map ICE parameters (ufrag, pwd) to SDP.

  sdp += SDPUtils.writeIceParameters(transceiver.iceGatherer.getLocalParameters()); // Map DTLS parameters to SDP.

  sdp += SDPUtils.writeDtlsParameters(transceiver.dtlsTransport.getLocalParameters(), type === 'offer' ? 'actpass' : 'active');
  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.direction) {
    sdp += 'a=' + transceiver.direction + '\r\n';
  } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    // spec.
    var msid = 'msid:' + stream.id + ' ' + transceiver.rtpSender.track.id + '\r\n';
    sdp += 'a=' + msid; // for Chrome.

    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' ' + msid;

    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' ' + msid;
      sdp += 'a=ssrc-group:FID ' + transceiver.sendEncodingParameters[0].ssrc + ' ' + transceiver.sendEncodingParameters[0].rtx.ssrc + '\r\n';
    }
  } // FIXME: this should be written by writeRtpDescription.


  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' cname:' + SDPUtils.localCName + '\r\n';

  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' cname:' + SDPUtils.localCName + '\r\n';
  }

  return sdp;
}; // Gets the direction from the mediaSection or the sessionpart.


SDPUtils.getDirection = function (mediaSection, sessionpart) {
  // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
  var lines = SDPUtils.splitLines(mediaSection);

  for (var i = 0; i < lines.length; i++) {
    switch (lines[i]) {
      case 'a=sendrecv':
      case 'a=sendonly':
      case 'a=recvonly':
      case 'a=inactive':
        return lines[i].substr(2);

      default: // FIXME: What should happen here?

    }
  }

  if (sessionpart) {
    return SDPUtils.getDirection(sessionpart);
  }

  return 'sendrecv';
};

SDPUtils.getKind = function (mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  return mline[0].substr(2);
};

SDPUtils.isRejected = function (mediaSection) {
  return mediaSection.split(' ', 2)[1] === '0';
};

SDPUtils.parseMLine = function (mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var parts = lines[0].substr(2).split(' ');
  return {
    kind: parts[0],
    port: parseInt(parts[1], 10),
    protocol: parts[2],
    fmt: parts.slice(3).join(' ')
  };
};

SDPUtils.parseOLine = function (mediaSection) {
  var line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
  var parts = line.substr(2).split(' ');
  return {
    username: parts[0],
    sessionId: parts[1],
    sessionVersion: parseInt(parts[2], 10),
    netType: parts[3],
    addressType: parts[4],
    address: parts[5]
  };
}; // a very naive interpretation of a valid SDP.


SDPUtils.isValidSDP = function (blob) {
  if (typeof blob !== 'string' || blob.length === 0) {
    return false;
  }

  var lines = SDPUtils.splitLines(blob);

  for (var i = 0; i < lines.length; i++) {
    if (lines[i].length < 2 || lines[i].charAt(1) !== '=') {
      return false;
    } // TODO: check the modifier a bit more.

  }

  return true;
}; // Expose public methods.


if (true) {
  module.exports = SDPUtils;
}

/***/ }),

/***/ "Mupt":
/*!********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js ***!
  \********************************************************************/
/*! exports provided: shimGetUserMedia, shimGetDisplayMedia, shimOnTrack, shimPeerConnection, shimSenderGetStats, shimReceiverGetStats, shimRemoveStream, shimRTCDataChannel, shimAddTransceiver, shimGetParameters, shimCreateOffer, shimCreateAnswer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimOnTrack", function() { return shimOnTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimPeerConnection", function() { return shimPeerConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimSenderGetStats", function() { return shimSenderGetStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimReceiverGetStats", function() { return shimReceiverGetStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimRemoveStream", function() { return shimRemoveStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimRTCDataChannel", function() { return shimRTCDataChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimAddTransceiver", function() { return shimAddTransceiver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetParameters", function() { return shimGetParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimCreateOffer", function() { return shimCreateOffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimCreateAnswer", function() { return shimCreateAnswer; });
/* harmony import */ var C_Users_admin_Desktop_testAgain_master_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "rePB");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "lVut");
/* harmony import */ var _getusermedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getusermedia */ "pXin");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return _getusermedia__WEBPACK_IMPORTED_MODULE_2__["shimGetUserMedia"]; });

/* harmony import */ var _getdisplaymedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getdisplaymedia */ "eUIL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shimGetDisplayMedia", function() { return _getdisplaymedia__WEBPACK_IMPORTED_MODULE_3__["shimGetDisplayMedia"]; });

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */






function shimOnTrack(window) {
  if (typeof window === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get: function get() {
        return {
          receiver: this.receiver
        };
      }
    });
  }
}
function shimPeerConnection(window) {
  var browserDetails = _utils__WEBPACK_IMPORTED_MODULE_1__["detectBrowser"](window);

  if (typeof window !== 'object' || !(window.RTCPeerConnection || window.mozRTCPeerConnection)) {
    return; // probably media.peerconnection.enabled=false in about:config
  }

  if (!window.RTCPeerConnection && window.mozRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.mozRTCPeerConnection;
  }

  if (browserDetails.version < 53) {
    // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
      var nativeMethod = window.RTCPeerConnection.prototype[method];

      var methodObj = Object(C_Users_admin_Desktop_testAgain_master_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, method, function () {
        arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
        return nativeMethod.apply(this, arguments);
      });

      window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
  } // support for addIceCandidate(null or undefined)
  // as well as ignoring {sdpMid, candidate: ""}


  if (browserDetails.version < 68) {
    var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;

    window.RTCPeerConnection.prototype.addIceCandidate = function addIceCandidate() {
      if (!arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }

        return Promise.resolve();
      } // Firefox 68+ emits and processes {candidate: "", ...}, ignore
      // in older versions.


      if (arguments[0] && arguments[0].candidate === '') {
        return Promise.resolve();
      }

      return nativeAddIceCandidate.apply(this, arguments);
    };
  }

  var modernStatsTypes = {
    inboundrtp: 'inbound-rtp',
    outboundrtp: 'outbound-rtp',
    candidatepair: 'candidate-pair',
    localcandidate: 'local-candidate',
    remotecandidate: 'remote-candidate'
  };
  var nativeGetStats = window.RTCPeerConnection.prototype.getStats;

  window.RTCPeerConnection.prototype.getStats = function getStats() {
    var _arguments = Array.prototype.slice.call(arguments),
        selector = _arguments[0],
        onSucc = _arguments[1],
        onErr = _arguments[2];

    return nativeGetStats.apply(this, [selector || null]).then(function (stats) {
      if (browserDetails.version < 53 && !onSucc) {
        // Shim only promise getStats with spec-hyphens in type names
        // Leave callback version alone; misc old uses of forEach before Map
        try {
          stats.forEach(function (stat) {
            stat.type = modernStatsTypes[stat.type] || stat.type;
          });
        } catch (e) {
          if (e.name !== 'TypeError') {
            throw e;
          } // Avoid TypeError: "type" is read-only, in old versions. 34-43ish


          stats.forEach(function (stat, i) {
            stats.set(i, Object.assign({}, stat, {
              type: modernStatsTypes[stat.type] || stat.type
            }));
          });
        }
      }

      return stats;
    }).then(onSucc, onErr);
  };
}
function shimSenderGetStats(window) {
  if (!(typeof window === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
    return;
  }

  if (window.RTCRtpSender && 'getStats' in window.RTCRtpSender.prototype) {
    return;
  }

  var origGetSenders = window.RTCPeerConnection.prototype.getSenders;

  if (origGetSenders) {
    window.RTCPeerConnection.prototype.getSenders = function getSenders() {
      var _this = this;

      var senders = origGetSenders.apply(this, []);
      senders.forEach(function (sender) {
        return sender._pc = _this;
      });
      return senders;
    };
  }

  var origAddTrack = window.RTCPeerConnection.prototype.addTrack;

  if (origAddTrack) {
    window.RTCPeerConnection.prototype.addTrack = function addTrack() {
      var sender = origAddTrack.apply(this, arguments);
      sender._pc = this;
      return sender;
    };
  }

  window.RTCRtpSender.prototype.getStats = function getStats() {
    return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
  };
}
function shimReceiverGetStats(window) {
  if (!(typeof window === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
    return;
  }

  if (window.RTCRtpSender && 'getStats' in window.RTCRtpReceiver.prototype) {
    return;
  }

  var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;

  if (origGetReceivers) {
    window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
      var _this2 = this;

      var receivers = origGetReceivers.apply(this, []);
      receivers.forEach(function (receiver) {
        return receiver._pc = _this2;
      });
      return receivers;
    };
  }

  _utils__WEBPACK_IMPORTED_MODULE_1__["wrapPeerConnectionEvent"](window, 'track', function (e) {
    e.receiver._pc = e.srcElement;
    return e;
  });

  window.RTCRtpReceiver.prototype.getStats = function getStats() {
    return this._pc.getStats(this.track);
  };
}
function shimRemoveStream(window) {
  if (!window.RTCPeerConnection || 'removeStream' in window.RTCPeerConnection.prototype) {
    return;
  }

  window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
    var _this3 = this;

    _utils__WEBPACK_IMPORTED_MODULE_1__["deprecated"]('removeStream', 'removeTrack');
    this.getSenders().forEach(function (sender) {
      if (sender.track && stream.getTracks().includes(sender.track)) {
        _this3.removeTrack(sender);
      }
    });
  };
}
function shimRTCDataChannel(window) {
  // rename DataChannel to RTCDataChannel (native fix in FF60):
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1173851
  if (window.DataChannel && !window.RTCDataChannel) {
    window.RTCDataChannel = window.DataChannel;
  }
}
function shimAddTransceiver(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!(typeof window === 'object' && window.RTCPeerConnection)) {
    return;
  }

  var origAddTransceiver = window.RTCPeerConnection.prototype.addTransceiver;

  if (origAddTransceiver) {
    window.RTCPeerConnection.prototype.addTransceiver = function addTransceiver() {
      this.setParametersPromises = [];
      var initParameters = arguments[1];
      var shouldPerformCheck = initParameters && 'sendEncodings' in initParameters;

      if (shouldPerformCheck) {
        // If sendEncodings params are provided, validate grammar
        initParameters.sendEncodings.forEach(function (encodingParam) {
          if ('rid' in encodingParam) {
            var ridRegex = /^[a-z0-9]{0,16}$/i;

            if (!ridRegex.test(encodingParam.rid)) {
              throw new TypeError('Invalid RID value provided.');
            }
          }

          if ('scaleResolutionDownBy' in encodingParam) {
            if (!(parseFloat(encodingParam.scaleResolutionDownBy) >= 1.0)) {
              throw new RangeError('scale_resolution_down_by must be >= 1.0');
            }
          }

          if ('maxFramerate' in encodingParam) {
            if (!(parseFloat(encodingParam.maxFramerate) >= 0)) {
              throw new RangeError('max_framerate must be >= 0.0');
            }
          }
        });
      }

      var transceiver = origAddTransceiver.apply(this, arguments);

      if (shouldPerformCheck) {
        // Check if the init options were applied. If not we do this in an
        // asynchronous way and save the promise reference in a global object.
        // This is an ugly hack, but at the same time is way more robust than
        // checking the sender parameters before and after the createOffer
        // Also note that after the createoffer we are not 100% sure that
        // the params were asynchronously applied so we might miss the
        // opportunity to recreate offer.
        var sender = transceiver.sender;
        var params = sender.getParameters();

        if (!('encodings' in params) || // Avoid being fooled by patched getParameters() below.
        params.encodings.length === 1 && Object.keys(params.encodings[0]).length === 0) {
          params.encodings = initParameters.sendEncodings;
          sender.sendEncodings = initParameters.sendEncodings;
          this.setParametersPromises.push(sender.setParameters(params).then(function () {
            delete sender.sendEncodings;
          }).catch(function () {
            delete sender.sendEncodings;
          }));
        }
      }

      return transceiver;
    };
  }
}
function shimGetParameters(window) {
  if (!(typeof window === 'object' && window.RTCRtpSender)) {
    return;
  }

  var origGetParameters = window.RTCRtpSender.prototype.getParameters;

  if (origGetParameters) {
    window.RTCRtpSender.prototype.getParameters = function getParameters() {
      var params = origGetParameters.apply(this, arguments);

      if (!('encodings' in params)) {
        params.encodings = [].concat(this.sendEncodings || [{}]);
      }

      return params;
    };
  }
}
function shimCreateOffer(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!(typeof window === 'object' && window.RTCPeerConnection)) {
    return;
  }

  var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;

  window.RTCPeerConnection.prototype.createOffer = function createOffer() {
    var _arguments2 = arguments,
        _this4 = this;

    if (this.setParametersPromises && this.setParametersPromises.length) {
      return Promise.all(this.setParametersPromises).then(function () {
        return origCreateOffer.apply(_this4, _arguments2);
      }).finally(function () {
        _this4.setParametersPromises = [];
      });
    }

    return origCreateOffer.apply(this, arguments);
  };
}
function shimCreateAnswer(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!(typeof window === 'object' && window.RTCPeerConnection)) {
    return;
  }

  var origCreateAnswer = window.RTCPeerConnection.prototype.createAnswer;

  window.RTCPeerConnection.prototype.createAnswer = function createAnswer() {
    var _arguments3 = arguments,
        _this5 = this;

    if (this.setParametersPromises && this.setParametersPromises.length) {
      return Promise.all(this.setParametersPromises).then(function () {
        return origCreateAnswer.apply(_this5, _arguments3);
      }).finally(function () {
        _this5.setParametersPromises = [];
      });
    }

    return origCreateAnswer.apply(this, arguments);
  };
}

/***/ }),

/***/ "VGGy":
/*!*******************************************************!*\
  !*** ./src/app/pages/camera/camera-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CameraRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraRoutingModule", function() { return CameraRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _camera_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camera.component */ "Ztrh");





var routes = [
    {
        path: "",
        component: _camera_component__WEBPACK_IMPORTED_MODULE_2__["CameraComponent"],
    }
];
var CameraRoutingModule = /** @class */ (function () {
    function CameraRoutingModule() {
    }
    CameraRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CameraRoutingModule });
    CameraRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CameraRoutingModule_Factory(t) { return new (t || CameraRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return CameraRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CameraRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CameraRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Wz1/":
/*!**********************************************!*\
  !*** ./src/app/pages/camera/beep.service.ts ***!
  \**********************************************/
/*! exports provided: BeepService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeepService", function() { return BeepService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var BeepService = /** @class */ (function () {
    function BeepService() {
    }
    BeepService.prototype.beep = function () {
        var audio = new Audio();
        audio.src = 'assets/sound/beep.wav';
        audio.load();
        audio.play();
    };
    BeepService.ɵfac = function BeepService_Factory(t) { return new (t || BeepService)(); };
    BeepService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BeepService, factory: BeepService.ɵfac, providedIn: 'root' });
    return BeepService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BeepService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XmTq":
/*!*****************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/getusermedia.js ***!
  \*****************************************************************/
/*! exports provided: shimGetUserMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return shimGetUserMedia; });
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


function shimGetUserMedia(window) {
  var navigator = window && window.navigator;

  var shimError_ = function shimError_(e) {
    return {
      name: {
        PermissionDeniedError: 'NotAllowedError'
      }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint,
      toString: function toString() {
        return this.name;
      }
    };
  }; // getUserMedia error shim.


  var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);

  navigator.mediaDevices.getUserMedia = function (c) {
    return origGetUserMedia(c).catch(function (e) {
      return Promise.reject(shimError_(e));
    });
  };
}

/***/ }),

/***/ "ZTa3":
/*!*********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/filtericeservers.js ***!
  \*********************************************************************/
/*! exports provided: filterIceServers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterIceServers", function() { return filterIceServers; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "lVut");
/*
 *  Copyright (c) 2018 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


 // Edge does not like
// 1) stun: filtered after 14393 unless ?transport=udp is present
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times

function filterIceServers(iceServers, edgeVersion) {
  var hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(function (server) {
    if (server && (server.urls || server.url)) {
      var urls = server.urls || server.url;

      if (server.url && !server.urls) {
        _utils__WEBPACK_IMPORTED_MODULE_0__["deprecated"]('RTCIceServer.url', 'RTCIceServer.urls');
      }

      var isString = typeof urls === 'string';

      if (isString) {
        urls = [urls];
      }

      urls = urls.filter(function (url) {
        // filter STUN unconditionally.
        if (url.indexOf('stun:') === 0) {
          return false;
        }

        var validTurn = url.startsWith('turn') && !url.startsWith('turn:[') && url.includes('transport=udp');

        if (validTurn && !hasTurn) {
          hasTurn = true;
          return true;
        }

        return validTurn && !hasTurn;
      });
      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
}

/***/ }),

/***/ "Ztrh":
/*!**************************************************!*\
  !*** ./src/app/pages/camera/camera.component.ts ***!
  \**************************************************/
/*! exports provided: CameraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraComponent", function() { return CameraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var quagga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quagga */ "igAG");
/* harmony import */ var quagga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quagga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var webrtc_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webrtc-adapter */ "0JNz");
/* harmony import */ var _beep_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./beep.service */ "Wz1/");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function CameraComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kh\u00F4ng c\u00F3 \u1EA3nh v\u1EC1 s\u1EA3n ph\u1EA9m n\u00E0y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CameraComponent_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 31);
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.productImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CameraComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.productName);
} }
function CameraComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Kh\u1EA3 d\u1EE5ng: ", ctx_r3.productAvailability, " ");
} }
function CameraComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "H\u1EBFt h\u00E0ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var CameraComponent = /** @class */ (function () {
    function CameraComponent(beepService, platform, dialog) {
        this.beepService = beepService;
        this.platform = platform;
        this.dialog = dialog;
    }
    CameraComponent.prototype.ngOnInit = function () {
        // this.dialog.open(ProductComponent)
    };
    CameraComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!navigator.mediaDevices || !(typeof navigator.mediaDevices.getUserMedia === 'function')) {
            this.errorMessage = 'getUserMedia is not supported';
            return;
        }
        else {
            quagga__WEBPACK_IMPORTED_MODULE_1___default.a.init({
                inputStream: {
                    name: "Live",
                    type: "LiveStream",
                    constraints: {
                        facingMode: 'environment' // restrict camera type
                    },
                    area: {
                        top: '40%',
                        right: '0%',
                        left: '0%',
                        bottom: '40%' // bottom offset
                    },
                },
                decoder: {
                    readers: ['ean_reader'] // restrict code types
                },
                locate: true,
            }, function (err) {
                if (err) {
                    _this.errorMessage = "QuaggaJS could not be initialized, err: " + err;
                }
                else {
                    quagga__WEBPACK_IMPORTED_MODULE_1___default.a.start();
                    quagga__WEBPACK_IMPORTED_MODULE_1___default.a.onDetected(function (res) {
                        _this.onBarcodeScanned(res.codeResult.code);
                        // window.alert(`code: ${res.codeResult.code}`);
                        console.log("barcode was scanned successfully: ", res.codeResult.code);
                        // if successful open dialog showing product information
                        // this.dialog.open(ProductComponent)
                    });
                }
            });
            // // open in android app
            // if (this.platform.ANDROID.valueOf()) {
            //   // console.log("android")
            //   // alert("running in android app")
            //   var backCamID;
            //   navigator.mediaDevices.enumerateDevices()
            //     .then(function (devices) {
            //       devices.forEach(function (device) {
            //         //alert( JSON.stringify(device) );
            //         alert("device: " + "name:" + device.kind + device.deviceId)
            //         if (device.kind === 'videoinput') {
            //           alert("found one" + device.kind + "id: " + device.deviceId);
            //           backCamID = device.deviceId;
            //         }
            //         if (device.kind == "videoinput" && device.label.match(/back/) != null) {
            //           //alert("Back found!");
            //           backCamID = device.deviceId;
            //           alert("Back camera is found: " + backCamID);
            //         }
            //       });
            //     })
            //     .finally(() => {
            //       alert("finally")
            //       if (typeof (backCamID) == "undefined") {
            //         alert("back camera not found.");
            //       }
            //       Quagga.init({
            //         inputStream: {
            //           name: "Live",
            //           type: "LiveStream",
            //           constraints: {
            //             deviceId: backCamID
            //             // facingMode: 'environment', // restrict camera type,
            //             // deviceId: arr[1]
            //           },
            //           area: { // defines rectangle of the detection
            //             top: '40%',    // top offset
            //             right: '0%',  // right offset
            //             left: '0%',   // left offset
            //             bottom: '40%'  // bottom offset
            //           },
            //         },
            //         decoder: {
            //           readers: ['ean_reader'] // restrict code types
            //         },
            //       },
            //         (err) => {
            //           if (err) {
            //             this.errorMessage = `QuaggaJS could not be initialized, err: ${err}`;
            //           } else {
            //             Quagga.start();
            //             Quagga.onDetected((res) => {
            //               this.onBarcodeScanned(res.codeResult.code);
            //               // window.alert(`code: ${res.codeResult.code}`);
            //               console.log("code was scanned successfully: ", res.codeResult.code)
            //             })
            //           }
            //         });
            //     })
            //     .catch(function (err) {
            //       alert(err.name + ": " + err.message);
            //     });
            //   // alert("result:" + arr);
            // } else {
            //   // not open in android app
            //   Quagga.init({
            //     inputStream: {
            //       name: "Live",
            //       type: "LiveStream",
            //       constraints: {
            //         facingMode: 'environment' // restrict camera type
            //       },
            //       area: { // defines rectangle of the detection
            //         top: '40%',    // top offset
            //         right: '0%',  // right offset
            //         left: '0%',   // left offset
            //         bottom: '40%'  // bottom offset
            //       },
            //     },
            //     decoder: {
            //       readers: ['ean_reader'] // restrict code types
            //     },
            //   },
            //     (err) => {
            //       if (err) {
            //         this.errorMessage = `QuaggaJS could not be initialized, err: ${err}`;
            //       } else {
            //         Quagga.start();
            //         Quagga.onDetected((res) => {
            //           this.onBarcodeScanned(res.codeResult.code);
            //           // window.alert(`code: ${res.codeResult.code}`);
            //           console.log("code was scanned successfully: ", res.codeResult.code)
            //         })
            //       }
            //     });
            //   // hope to finish below: 
            //   // let permissions = cordova.plugins.permissions;
            //   // permissions.checkPermission(permissions.CAMERA, (res) => {
            //   //   if (!res.hasPermission) {
            //   //     permissions.requestPermission(permissions.CAMERA, open());
            //   //   } else {
            //   //     Quagga.init({
            //   //       inputStream: {
            //   //         name: "Live",
            //   //         type: "LiveStream",
            //   //         constraints: {
            //   //           facingMode: 'environment' // restrict camera type
            //   //         },
            //   //         area: { // defines rectangle of the detection
            //   //           top: '40%',    // top offset
            //   //           right: '0%',  // right offset
            //   //           left: '0%',   // left offset
            //   //           bottom: '40%'  // bottom offset
            //   //         },
            //   //       },
            //   //       decoder: {
            //   //         readers: ['ean_reader'] // restrict code types
            //   //       },
            //   //     },
            //   //       (err) => {
            //   //         if (err) {
            //   //           this.errorMessage = `QuaggaJS could not be initialized, err: ${err}`;
            //   //         } else {
            //   //           Quagga.start();
            //   //           Quagga.onDetected((res) => {
            //   //             this.onBarcodeScanned(res.codeResult.code);
            //   //             // window.alert(`code: ${res.codeResult.code}`);
            //   //             console.log("code was scanned successfully: ", res.codeResult.code)
            //   //           })
            //   //         }
            //   //       });
            //   //   }
            //   // })
            // }
        }
    };
    CameraComponent.prototype.onBarcodeScanned = function (code) {
        // ignore duplicates for an interval of 1.5 seconds
        var now = new Date().getTime();
        if (code === this.lastScannedCode && (now < this.lastScannedCodeDate + 1500)) {
            return;
        }
        // ignore unknown articles
        // const article = this.catalogue.find(a => a.ean === code);
        // if (!article) {
        //   return;
        // }
        // this.shoppingCart.addArticle(article);
        this.lastScannedCode = code;
        this.lastScannedCodeDate = now;
        this.scannedCode = this.lastScannedCode;
        // add beep sound
        this.beepService.beep();
        // this.changeDetectorRef.detectChanges();
    };
    CameraComponent.ɵfac = function CameraComponent_Factory(t) { return new (t || CameraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_beep_service__WEBPACK_IMPORTED_MODULE_3__["BeepService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
    CameraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CameraComponent, selectors: [["app-camera"]], decls: 41, vars: 7, consts: [[1, "camera"], ["id", "interactive", 1, "viewport"], ["autoplay", "true", "preload", "auto"], [1, "drawingBuffer"], [1, "product"], [1, "container"], [1, "product__detail"], [1, "product__detail-image", "text-center"], ["class", "detail-image__text", 4, "ngIf"], [3, "src", 4, "ngIf"], [1, "product__detail-information"], [1, "detail-information__code"], ["class", "detail-information__name", 4, "ngIf"], [1, "detail-information__amount"], [1, "detail-information__amount-title"], [1, "detail-information__amount-area"], [1, "btn", "btn-outline-secondary", "subtract"], ["type", "number", "placeholder", "1"], [1, "btn", "btn-outline-primary", "add"], [1, "information__amount-availability"], [4, "ngIf"], ["class", "alert-text", 4, "ngIf"], [1, "detail-information__price"], [1, "product__detail-actions"], [1, "btn", "addCart", "btn-primary"], [1, "btn", "buyNow", "btn-outline-primary"], [1, "cart"], [1, "cart__wrapper"], [1, "material-icons-outlined"], [1, "productsInCart"], [1, "detail-image__text"], [3, "src"], [1, "detail-information__name"], [1, "alert-text"]], template: function CameraComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "video", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "canvas", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CameraComponent_p_8_Template, 2, 0, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CameraComponent_img_9_Template, 1, 1, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Banh Phong Tom Muc Indonesia");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CameraComponent_p_15_Template, 2, 1, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "S\u1ED1 l\u01B0\u1EE3ng: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "-");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "+");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CameraComponent_span_26_Template, 2, 1, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CameraComponent_span_27_Template, 2, 0, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Th\u00EAm v\u00E0o gi\u1ECF h\u00E0ng");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Mua ngay");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " shopping_cart ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " 0 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.productImage);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productImage);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Barcode: ", ctx.scannedCode, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productAvailability && ctx.productAvailability > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.productAvailability || ctx.productAvailability == 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Gi\u00E1 ti\u1EC1n: ", ctx.productPrice, " 500000 vnd ");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".camera[_ngcontent-%COMP%]   .viewport[_ngcontent-%COMP%]  video {\n  width: 100%;\n  height: 240px;\n  object-fit: cover;\n}\n.camera[_ngcontent-%COMP%]   .viewport[_ngcontent-%COMP%] {\n  position: relative;\n}\n.camera[_ngcontent-%COMP%]   .viewport[_ngcontent-%COMP%]   .drawingBuffer[_ngcontent-%COMP%] {\n  position: absolute;\n  content: \"\";\n}\n.camera[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  position: relative;\n}\n.camera[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%] {\n  position: absolute;\n  content: \"\";\n  top: 50%;\n  right: 0;\n}\n.camera[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .cart__wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.camera[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .cart__wrapper[_ngcontent-%COMP%]   .productsInCart[_ngcontent-%COMP%] {\n  position: absolute;\n  content: \"\";\n  top: bottom;\n  bottom: 16px;\n  left: -10px;\n  background: #4fb68d;\n  color: #fff;\n  border-radius: 50%;\n  padding: 6px;\n  line-height: 6px;\n}\n.camera[_ngcontent-%COMP%]   .product__detail-image[_ngcontent-%COMP%] {\n  width: 12rem;\n  height: 12rem;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  background: #fafafa;\n  border-radius: 50%;\n}\n.camera[_ngcontent-%COMP%]   .product__detail-image[_ngcontent-%COMP%]   .detail-image__text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.camera[_ngcontent-%COMP%]   .product__detail-information[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.camera[_ngcontent-%COMP%]   .product__detail-information[_ngcontent-%COMP%]   .detail-information__code[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.camera[_ngcontent-%COMP%]   .product__detail-information[_ngcontent-%COMP%]   .detail-information__amount-title[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.camera[_ngcontent-%COMP%]   .product__detail-information[_ngcontent-%COMP%]   .detail-information__amount-area[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  outline: none;\n  border: none;\n  border-bottom: 0.5px solid #cecece;\n  text-align: center;\n}\n.camera[_ngcontent-%COMP%]   .product__detail-information[_ngcontent-%COMP%]   .detail-information__amount-area[_ngcontent-%COMP%]   .subtract[_ngcontent-%COMP%], .camera[_ngcontent-%COMP%]   .product__detail-information[_ngcontent-%COMP%]   .detail-information__amount-area[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  margin-right: 5px;\n  font-size: 20px;\n  height: 25px;\n  border: none;\n  outline: none;\n}\n.camera[_ngcontent-%COMP%]   .product__detail-information[_ngcontent-%COMP%]   .detail-information__amount-area[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.camera[_ngcontent-%COMP%]   .product__detail-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.camera[_ngcontent-%COMP%]   .product__detail-actions[_ngcontent-%COMP%]   .addCart[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.alert-text[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYW1lcmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0FBRko7QUFHSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUROO0FBS0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFLSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0FBSE47QUFLTTtFQUNFLGtCQUFBO0FBSFI7QUFLUTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBSFY7QUFTTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFQUjtBQVNRO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBUFY7QUFXTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBVFI7QUFXVTtFQUNFLGdCQUFBO0FBVFo7QUFnQlk7RUFDRSxrQkFBQTtBQWRkO0FBaUJjO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUFmaEI7QUFrQmM7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBaEJoQjtBQW1CYztFQUVFLGdCQUFBO0FBbEJoQjtBQXlCTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBdkJSO0FBeUJRO0VBQ0Usa0JBQUE7QUF2QlY7QUE4QkE7RUFDRSxVQUFBO0FBM0JGIiwiZmlsZSI6ImNhbWVyYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENhbWVyYSBDb21wb25lbnQgU3R5bGluZ1xyXG4uY2FtZXJhIHtcclxuICAudmlld3BvcnQ6Om5nLWRlZXAgdmlkZW8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI0MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG5cclxuICAudmlld3BvcnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmRyYXdpbmdCdWZmZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC5jYXJ0IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgcmlnaHQ6IDA7XHJcblxyXG4gICAgICAmX193cmFwcGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIC5wcm9kdWN0c0luQ2FydCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgdG9wOiBib3R0b207XHJcbiAgICAgICAgICBib3R0b206IDE2cHg7XHJcbiAgICAgICAgICBsZWZ0OiAtMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICM0ZmI2OGQ7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZGV0YWlsIHtcclxuICAgICAgJi1pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDEycmVtO1xyXG4gICAgICAgIGhlaWdodDogMTJyZW07XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICAgICAgLmRldGFpbC1pbWFnZV9fdGV4dCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi1pbmZvcm1hdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLmRldGFpbC1pbmZvcm1hdGlvbiB7XHJcbiAgICAgICAgICAmX19jb2RlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmX19uYW1lIHtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmX19hbW91bnQge1xyXG4gICAgICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1hcmVhIHtcclxuICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjY2VjZWNlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLnN1YnRyYWN0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5hZGQge1xyXG4gICAgICAgICAgICAgICAgQGV4dGVuZCAuc3VidHJhY3Q7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi1hY3Rpb25zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5hZGRDYXJ0IHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hbGVydC10ZXh0IHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */"] });
    return CameraComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CameraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-camera',
                templateUrl: './camera.component.html',
                styleUrls: ['./camera.component.scss'],
            }]
    }], function () { return [{ type: _beep_service__WEBPACK_IMPORTED_MODULE_3__["BeepService"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "cGlD":
/*!********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/getdisplaymedia.js ***!
  \********************************************************************/
/*! exports provided: shimGetDisplayMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetDisplayMedia", function() { return shimGetDisplayMedia; });
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


function shimGetDisplayMedia(window) {
  if (!('getDisplayMedia' in window.navigator)) {
    return;
  }

  if (!window.navigator.mediaDevices) {
    return;
  }

  if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }

  window.navigator.mediaDevices.getDisplayMedia = window.navigator.getDisplayMedia.bind(window.navigator);
}

/***/ }),

/***/ "eUIL":
/*!***********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js ***!
  \***********************************************************************/
/*! exports provided: shimGetDisplayMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetDisplayMedia", function() { return shimGetDisplayMedia; });
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


function shimGetDisplayMedia(window, preferredMediaSource) {
  if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }

  if (!window.navigator.mediaDevices) {
    return;
  }

  window.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
    if (!(constraints && constraints.video)) {
      var err = new DOMException('getDisplayMedia without video ' + 'constraints is undefined');
      err.name = 'NotFoundError'; // from https://heycam.github.io/webidl/#idl-DOMException-error-names

      err.code = 8;
      return Promise.reject(err);
    }

    if (constraints.video === true) {
      constraints.video = {
        mediaSource: preferredMediaSource
      };
    } else {
      constraints.video.mediaSource = preferredMediaSource;
    }

    return window.navigator.mediaDevices.getUserMedia(constraints);
  };
}

/***/ }),

/***/ "eoT/":
/*!***********************************************!*\
  !*** ./src/app/pages/camera/camera.module.ts ***!
  \***********************************************/
/*! exports provided: CameraModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraModule", function() { return CameraModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _camera_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./camera.component */ "Ztrh");
/* harmony import */ var _camera_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./camera-routing.module */ "VGGy");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/product.component */ "y4d3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");









var CameraModule = /** @class */ (function () {
    function CameraModule() {
    }
    CameraModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CameraModule });
    CameraModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CameraModule_Factory(t) { return new (t || CameraModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _camera_routing_module__WEBPACK_IMPORTED_MODULE_5__["CameraRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"]
            ]] });
    return CameraModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CameraModule, { declarations: [_camera_component__WEBPACK_IMPORTED_MODULE_4__["CameraComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _camera_routing_module__WEBPACK_IMPORTED_MODULE_5__["CameraRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CameraModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_camera_component__WEBPACK_IMPORTED_MODULE_4__["CameraComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _camera_routing_module__WEBPACK_IMPORTED_MODULE_5__["CameraRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ggQn":
/*!***********************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/common_shim.js ***!
  \***********************************************************/
/*! exports provided: shimRTCIceCandidate, shimMaxMessageSize, shimSendThrowTypeError, shimConnectionState, removeAllowExtmapMixed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimRTCIceCandidate", function() { return shimRTCIceCandidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimMaxMessageSize", function() { return shimMaxMessageSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimSendThrowTypeError", function() { return shimSendThrowTypeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimConnectionState", function() { return shimConnectionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllowExtmapMixed", function() { return removeAllowExtmapMixed; });
/* harmony import */ var sdp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sdp */ "KCt4");
/* harmony import */ var sdp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sdp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "lVut");
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */




function shimRTCIceCandidate(window) {
  // foundation is arbitrarily chosen as an indicator for full support for
  // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
  if (!window.RTCIceCandidate || window.RTCIceCandidate && 'foundation' in window.RTCIceCandidate.prototype) {
    return;
  }

  var NativeRTCIceCandidate = window.RTCIceCandidate;

  window.RTCIceCandidate = function RTCIceCandidate(args) {
    // Remove the a= which shouldn't be part of the candidate string.
    if (typeof args === 'object' && args.candidate && args.candidate.indexOf('a=') === 0) {
      args = JSON.parse(JSON.stringify(args));
      args.candidate = args.candidate.substr(2);
    }

    if (args.candidate && args.candidate.length) {
      // Augment the native candidate with the parsed fields.
      var nativeCandidate = new NativeRTCIceCandidate(args);
      var parsedCandidate = sdp__WEBPACK_IMPORTED_MODULE_0___default.a.parseCandidate(args.candidate);
      var augmentedCandidate = Object.assign(nativeCandidate, parsedCandidate); // Add a serializer that does not serialize the extra attributes.

      augmentedCandidate.toJSON = function toJSON() {
        return {
          candidate: augmentedCandidate.candidate,
          sdpMid: augmentedCandidate.sdpMid,
          sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
          usernameFragment: augmentedCandidate.usernameFragment
        };
      };

      return augmentedCandidate;
    }

    return new NativeRTCIceCandidate(args);
  };

  window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype; // Hook up the augmented candidate in onicecandidate and
  // addEventListener('icecandidate', ...)

  _utils__WEBPACK_IMPORTED_MODULE_1__["wrapPeerConnectionEvent"](window, 'icecandidate', function (e) {
    if (e.candidate) {
      Object.defineProperty(e, 'candidate', {
        value: new window.RTCIceCandidate(e.candidate),
        writable: 'false'
      });
    }

    return e;
  });
}
function shimMaxMessageSize(window) {
  if (!window.RTCPeerConnection) {
    return;
  }

  var browserDetails = _utils__WEBPACK_IMPORTED_MODULE_1__["detectBrowser"](window);

  if (!('sctp' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
      get: function get() {
        return typeof this._sctp === 'undefined' ? null : this._sctp;
      }
    });
  }

  var sctpInDescription = function sctpInDescription(description) {
    if (!description || !description.sdp) {
      return false;
    }

    var sections = sdp__WEBPACK_IMPORTED_MODULE_0___default.a.splitSections(description.sdp);
    sections.shift();
    return sections.some(function (mediaSection) {
      var mLine = sdp__WEBPACK_IMPORTED_MODULE_0___default.a.parseMLine(mediaSection);
      return mLine && mLine.kind === 'application' && mLine.protocol.indexOf('SCTP') !== -1;
    });
  };

  var getRemoteFirefoxVersion = function getRemoteFirefoxVersion(description) {
    // TODO: Is there a better solution for detecting Firefox?
    var match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);

    if (match === null || match.length < 2) {
      return -1;
    }

    var version = parseInt(match[1], 10); // Test for NaN (yes, this is ugly)

    return version !== version ? -1 : version;
  };

  var getCanSendMaxMessageSize = function getCanSendMaxMessageSize(remoteIsFirefox) {
    // Every implementation we know can send at least 64 KiB.
    // Note: Although Chrome is technically able to send up to 256 KiB, the
    //       data does not reach the other peer reliably.
    //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
    var canSendMaxMessageSize = 65536;

    if (browserDetails.browser === 'firefox') {
      if (browserDetails.version < 57) {
        if (remoteIsFirefox === -1) {
          // FF < 57 will send in 16 KiB chunks using the deprecated PPID
          // fragmentation.
          canSendMaxMessageSize = 16384;
        } else {
          // However, other FF (and RAWRTC) can reassemble PPID-fragmented
          // messages. Thus, supporting ~2 GiB when sending.
          canSendMaxMessageSize = 2147483637;
        }
      } else if (browserDetails.version < 60) {
        // Currently, all FF >= 57 will reset the remote maximum message size
        // to the default value when a data channel is created at a later
        // stage. :(
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
        canSendMaxMessageSize = browserDetails.version === 57 ? 65535 : 65536;
      } else {
        // FF >= 60 supports sending ~2 GiB
        canSendMaxMessageSize = 2147483637;
      }
    }

    return canSendMaxMessageSize;
  };

  var getMaxMessageSize = function getMaxMessageSize(description, remoteIsFirefox) {
    // Note: 65536 bytes is the default value from the SDP spec. Also,
    //       every implementation we know supports receiving 65536 bytes.
    var maxMessageSize = 65536; // FF 57 has a slightly incorrect default remote max message size, so
    // we need to adjust it here to avoid a failure when sending.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697

    if (browserDetails.browser === 'firefox' && browserDetails.version === 57) {
      maxMessageSize = 65535;
    }

    var match = sdp__WEBPACK_IMPORTED_MODULE_0___default.a.matchPrefix(description.sdp, 'a=max-message-size:');

    if (match.length > 0) {
      maxMessageSize = parseInt(match[0].substr(19), 10);
    } else if (browserDetails.browser === 'firefox' && remoteIsFirefox !== -1) {
      // If the maximum message size is not present in the remote SDP and
      // both local and remote are Firefox, the remote peer can receive
      // ~2 GiB.
      maxMessageSize = 2147483637;
    }

    return maxMessageSize;
  };

  var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;

  window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
    this._sctp = null; // Chrome decided to not expose .sctp in plan-b mode.
    // As usual, adapter.js has to do an 'ugly worakaround'
    // to cover up the mess.

    if (browserDetails.browser === 'chrome' && browserDetails.version >= 76) {
      var _this$getConfiguratio = this.getConfiguration(),
          sdpSemantics = _this$getConfiguratio.sdpSemantics;

      if (sdpSemantics === 'plan-b') {
        Object.defineProperty(this, 'sctp', {
          get: function get() {
            return typeof this._sctp === 'undefined' ? null : this._sctp;
          },
          enumerable: true,
          configurable: true
        });
      }
    }

    if (sctpInDescription(arguments[0])) {
      // Check if the remote is FF.
      var isFirefox = getRemoteFirefoxVersion(arguments[0]); // Get the maximum message size the local peer is capable of sending

      var canSendMMS = getCanSendMaxMessageSize(isFirefox); // Get the maximum message size of the remote peer.

      var remoteMMS = getMaxMessageSize(arguments[0], isFirefox); // Determine final maximum message size

      var maxMessageSize;

      if (canSendMMS === 0 && remoteMMS === 0) {
        maxMessageSize = Number.POSITIVE_INFINITY;
      } else if (canSendMMS === 0 || remoteMMS === 0) {
        maxMessageSize = Math.max(canSendMMS, remoteMMS);
      } else {
        maxMessageSize = Math.min(canSendMMS, remoteMMS);
      } // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
      // attribute.


      var sctp = {};
      Object.defineProperty(sctp, 'maxMessageSize', {
        get: function get() {
          return maxMessageSize;
        }
      });
      this._sctp = sctp;
    }

    return origSetRemoteDescription.apply(this, arguments);
  };
}
function shimSendThrowTypeError(window) {
  if (!(window.RTCPeerConnection && 'createDataChannel' in window.RTCPeerConnection.prototype)) {
    return;
  } // Note: Although Firefox >= 57 has a native implementation, the maximum
  //       message size can be reset for all data channels at a later stage.
  //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831


  function wrapDcSend(dc, pc) {
    var origDataChannelSend = dc.send;

    dc.send = function send() {
      var data = arguments[0];
      var length = data.length || data.size || data.byteLength;

      if (dc.readyState === 'open' && pc.sctp && length > pc.sctp.maxMessageSize) {
        throw new TypeError('Message too large (can send a maximum of ' + pc.sctp.maxMessageSize + ' bytes)');
      }

      return origDataChannelSend.apply(dc, arguments);
    };
  }

  var origCreateDataChannel = window.RTCPeerConnection.prototype.createDataChannel;

  window.RTCPeerConnection.prototype.createDataChannel = function createDataChannel() {
    var dataChannel = origCreateDataChannel.apply(this, arguments);
    wrapDcSend(dataChannel, this);
    return dataChannel;
  };

  _utils__WEBPACK_IMPORTED_MODULE_1__["wrapPeerConnectionEvent"](window, 'datachannel', function (e) {
    wrapDcSend(e.channel, e.target);
    return e;
  });
}
/* shims RTCConnectionState by pretending it is the same as iceConnectionState.
 * See https://bugs.chromium.org/p/webrtc/issues/detail?id=6145#c12
 * for why this is a valid hack in Chrome. In Firefox it is slightly incorrect
 * since DTLS failures would be hidden. See
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1265827
 * for the Firefox tracking bug.
 */

function shimConnectionState(window) {
  if (!window.RTCPeerConnection || 'connectionState' in window.RTCPeerConnection.prototype) {
    return;
  }

  var proto = window.RTCPeerConnection.prototype;
  Object.defineProperty(proto, 'connectionState', {
    get: function get() {
      return {
        completed: 'connected',
        checking: 'connecting'
      }[this.iceConnectionState] || this.iceConnectionState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(proto, 'onconnectionstatechange', {
    get: function get() {
      return this._onconnectionstatechange || null;
    },
    set: function set(cb) {
      if (this._onconnectionstatechange) {
        this.removeEventListener('connectionstatechange', this._onconnectionstatechange);
        delete this._onconnectionstatechange;
      }

      if (cb) {
        this.addEventListener('connectionstatechange', this._onconnectionstatechange = cb);
      }
    },
    enumerable: true,
    configurable: true
  });
  ['setLocalDescription', 'setRemoteDescription'].forEach(function (method) {
    var origMethod = proto[method];

    proto[method] = function () {
      if (!this._connectionstatechangepoly) {
        this._connectionstatechangepoly = function (e) {
          var pc = e.target;

          if (pc._lastConnectionState !== pc.connectionState) {
            pc._lastConnectionState = pc.connectionState;
            var newEvent = new Event('connectionstatechange', e);
            pc.dispatchEvent(newEvent);
          }

          return e;
        };

        this.addEventListener('iceconnectionstatechange', this._connectionstatechangepoly);
      }

      return origMethod.apply(this, arguments);
    };
  });
}
function removeAllowExtmapMixed(window) {
  /* remove a=extmap-allow-mixed for webrtc.org < M71 */
  if (!window.RTCPeerConnection) {
    return;
  }

  var browserDetails = _utils__WEBPACK_IMPORTED_MODULE_1__["detectBrowser"](window);

  if (browserDetails.browser === 'chrome' && browserDetails.version >= 71) {
    return;
  }

  if (browserDetails.browser === 'safari' && browserDetails.version >= 605) {
    return;
  }

  var nativeSRD = window.RTCPeerConnection.prototype.setRemoteDescription;

  window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription(desc) {
    if (desc && desc.sdp && desc.sdp.indexOf('\na=extmap-allow-mixed') !== -1) {
      desc.sdp = desc.sdp.split('\n').filter(function (line) {
        return line.trim() !== 'a=extmap-allow-mixed';
      }).join('\n');
    }

    return nativeSRD.apply(this, arguments);
  };
}

/***/ }),

/***/ "goMv":
/*!******************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/safari/safari_shim.js ***!
  \******************************************************************/
/*! exports provided: shimLocalStreamsAPI, shimRemoteStreamsAPI, shimCallbacksAPI, shimGetUserMedia, shimConstraints, shimRTCIceServerUrls, shimTrackEventTransceiver, shimCreateOfferLegacy, shimAudioContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimLocalStreamsAPI", function() { return shimLocalStreamsAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimRemoteStreamsAPI", function() { return shimRemoteStreamsAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimCallbacksAPI", function() { return shimCallbacksAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return shimGetUserMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimConstraints", function() { return shimConstraints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimRTCIceServerUrls", function() { return shimRTCIceServerUrls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimTrackEventTransceiver", function() { return shimTrackEventTransceiver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimCreateOfferLegacy", function() { return shimCreateOfferLegacy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimAudioContext", function() { return shimAudioContext; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "lVut");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */



function shimLocalStreamsAPI(window) {
  if (typeof window !== 'object' || !window.RTCPeerConnection) {
    return;
  }

  if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
      if (!this._localStreams) {
        this._localStreams = [];
      }

      return this._localStreams;
    };
  }

  if (!('addStream' in window.RTCPeerConnection.prototype)) {
    var _addTrack = window.RTCPeerConnection.prototype.addTrack;

    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
      var _this = this;

      if (!this._localStreams) {
        this._localStreams = [];
      }

      if (!this._localStreams.includes(stream)) {
        this._localStreams.push(stream);
      } // Try to emulate Chrome's behaviour of adding in audio-video order.
      // Safari orders by track id.


      stream.getAudioTracks().forEach(function (track) {
        return _addTrack.call(_this, track, stream);
      });
      stream.getVideoTracks().forEach(function (track) {
        return _addTrack.call(_this, track, stream);
      });
    };

    window.RTCPeerConnection.prototype.addTrack = function addTrack(track) {
      var _this2 = this;

      for (var _len = arguments.length, streams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        streams[_key - 1] = arguments[_key];
      }

      if (streams) {
        streams.forEach(function (stream) {
          if (!_this2._localStreams) {
            _this2._localStreams = [stream];
          } else if (!_this2._localStreams.includes(stream)) {
            _this2._localStreams.push(stream);
          }
        });
      }

      return _addTrack.apply(this, arguments);
    };
  }

  if (!('removeStream' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
      var _this3 = this;

      if (!this._localStreams) {
        this._localStreams = [];
      }

      var index = this._localStreams.indexOf(stream);

      if (index === -1) {
        return;
      }

      this._localStreams.splice(index, 1);

      var tracks = stream.getTracks();
      this.getSenders().forEach(function (sender) {
        if (tracks.includes(sender.track)) {
          _this3.removeTrack(sender);
        }
      });
    };
  }
}
function shimRemoteStreamsAPI(window) {
  if (typeof window !== 'object' || !window.RTCPeerConnection) {
    return;
  }

  if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getRemoteStreams = function getRemoteStreams() {
      return this._remoteStreams ? this._remoteStreams : [];
    };
  }

  if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
      get: function get() {
        return this._onaddstream;
      },
      set: function set(f) {
        var _this4 = this;

        if (this._onaddstream) {
          this.removeEventListener('addstream', this._onaddstream);
          this.removeEventListener('track', this._onaddstreampoly);
        }

        this.addEventListener('addstream', this._onaddstream = f);
        this.addEventListener('track', this._onaddstreampoly = function (e) {
          e.streams.forEach(function (stream) {
            if (!_this4._remoteStreams) {
              _this4._remoteStreams = [];
            }

            if (_this4._remoteStreams.includes(stream)) {
              return;
            }

            _this4._remoteStreams.push(stream);

            var event = new Event('addstream');
            event.stream = stream;

            _this4.dispatchEvent(event);
          });
        });
      }
    });
    var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;

    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
      var pc = this;

      if (!this._onaddstreampoly) {
        this.addEventListener('track', this._onaddstreampoly = function (e) {
          e.streams.forEach(function (stream) {
            if (!pc._remoteStreams) {
              pc._remoteStreams = [];
            }

            if (pc._remoteStreams.indexOf(stream) >= 0) {
              return;
            }

            pc._remoteStreams.push(stream);

            var event = new Event('addstream');
            event.stream = stream;
            pc.dispatchEvent(event);
          });
        });
      }

      return origSetRemoteDescription.apply(pc, arguments);
    };
  }
}
function shimCallbacksAPI(window) {
  if (typeof window !== 'object' || !window.RTCPeerConnection) {
    return;
  }

  var prototype = window.RTCPeerConnection.prototype;
  var origCreateOffer = prototype.createOffer;
  var origCreateAnswer = prototype.createAnswer;
  var setLocalDescription = prototype.setLocalDescription;
  var setRemoteDescription = prototype.setRemoteDescription;
  var addIceCandidate = prototype.addIceCandidate;

  prototype.createOffer = function createOffer(successCallback, failureCallback) {
    var options = arguments.length >= 2 ? arguments[2] : arguments[0];
    var promise = origCreateOffer.apply(this, [options]);

    if (!failureCallback) {
      return promise;
    }

    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  prototype.createAnswer = function createAnswer(successCallback, failureCallback) {
    var options = arguments.length >= 2 ? arguments[2] : arguments[0];
    var promise = origCreateAnswer.apply(this, [options]);

    if (!failureCallback) {
      return promise;
    }

    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  var withCallback = function withCallback(description, successCallback, failureCallback) {
    var promise = setLocalDescription.apply(this, [description]);

    if (!failureCallback) {
      return promise;
    }

    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  prototype.setLocalDescription = withCallback;

  withCallback = function withCallback(description, successCallback, failureCallback) {
    var promise = setRemoteDescription.apply(this, [description]);

    if (!failureCallback) {
      return promise;
    }

    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  prototype.setRemoteDescription = withCallback;

  withCallback = function withCallback(candidate, successCallback, failureCallback) {
    var promise = addIceCandidate.apply(this, [candidate]);

    if (!failureCallback) {
      return promise;
    }

    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  prototype.addIceCandidate = withCallback;
}
function shimGetUserMedia(window) {
  var navigator = window && window.navigator;

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // shim not needed in Safari 12.1
    var mediaDevices = navigator.mediaDevices;

    var _getUserMedia = mediaDevices.getUserMedia.bind(mediaDevices);

    navigator.mediaDevices.getUserMedia = function (constraints) {
      return _getUserMedia(shimConstraints(constraints));
    };
  }

  if (!navigator.getUserMedia && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.getUserMedia = function getUserMedia(constraints, cb, errcb) {
      navigator.mediaDevices.getUserMedia(constraints).then(cb, errcb);
    }.bind(navigator);
  }
}
function shimConstraints(constraints) {
  if (constraints && constraints.video !== undefined) {
    return Object.assign({}, constraints, {
      video: _utils__WEBPACK_IMPORTED_MODULE_0__["compactObject"](constraints.video)
    });
  }

  return constraints;
}
function shimRTCIceServerUrls(window) {
  if (!window.RTCPeerConnection) {
    return;
  } // migrate from non-spec RTCIceServer.url to RTCIceServer.urls


  var OrigPeerConnection = window.RTCPeerConnection;

  window.RTCPeerConnection = function RTCPeerConnection(pcConfig, pcConstraints) {
    if (pcConfig && pcConfig.iceServers) {
      var newIceServers = [];

      for (var i = 0; i < pcConfig.iceServers.length; i++) {
        var server = pcConfig.iceServers[i];

        if (!server.hasOwnProperty('urls') && server.hasOwnProperty('url')) {
          _utils__WEBPACK_IMPORTED_MODULE_0__["deprecated"]('RTCIceServer.url', 'RTCIceServer.urls');
          server = JSON.parse(JSON.stringify(server));
          server.urls = server.url;
          delete server.url;
          newIceServers.push(server);
        } else {
          newIceServers.push(pcConfig.iceServers[i]);
        }
      }

      pcConfig.iceServers = newIceServers;
    }

    return new OrigPeerConnection(pcConfig, pcConstraints);
  };

  window.RTCPeerConnection.prototype = OrigPeerConnection.prototype; // wrap static methods. Currently just generateCertificate.

  if ('generateCertificate' in OrigPeerConnection) {
    Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
      get: function get() {
        return OrigPeerConnection.generateCertificate;
      }
    });
  }
}
function shimTrackEventTransceiver(window) {
  // Add event.transceiver member over deprecated event.receiver
  if (typeof window === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get: function get() {
        return {
          receiver: this.receiver
        };
      }
    });
  }
}
function shimCreateOfferLegacy(window) {
  var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;

  window.RTCPeerConnection.prototype.createOffer = function createOffer(offerOptions) {
    if (offerOptions) {
      if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
        // support bit values
        offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
      }

      var audioTransceiver = this.getTransceivers().find(function (transceiver) {
        return transceiver.receiver.track.kind === 'audio';
      });

      if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
        if (audioTransceiver.direction === 'sendrecv') {
          if (audioTransceiver.setDirection) {
            audioTransceiver.setDirection('sendonly');
          } else {
            audioTransceiver.direction = 'sendonly';
          }
        } else if (audioTransceiver.direction === 'recvonly') {
          if (audioTransceiver.setDirection) {
            audioTransceiver.setDirection('inactive');
          } else {
            audioTransceiver.direction = 'inactive';
          }
        }
      } else if (offerOptions.offerToReceiveAudio === true && !audioTransceiver) {
        this.addTransceiver('audio');
      }

      if (typeof offerOptions.offerToReceiveVideo !== 'undefined') {
        // support bit values
        offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
      }

      var videoTransceiver = this.getTransceivers().find(function (transceiver) {
        return transceiver.receiver.track.kind === 'video';
      });

      if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
        if (videoTransceiver.direction === 'sendrecv') {
          if (videoTransceiver.setDirection) {
            videoTransceiver.setDirection('sendonly');
          } else {
            videoTransceiver.direction = 'sendonly';
          }
        } else if (videoTransceiver.direction === 'recvonly') {
          if (videoTransceiver.setDirection) {
            videoTransceiver.setDirection('inactive');
          } else {
            videoTransceiver.direction = 'inactive';
          }
        }
      } else if (offerOptions.offerToReceiveVideo === true && !videoTransceiver) {
        this.addTransceiver('video');
      }
    }

    return origCreateOffer.apply(this, arguments);
  };
}
function shimAudioContext(window) {
  if (typeof window !== 'object' || window.AudioContext) {
    return;
  }

  window.AudioContext = window.webkitAudioContext;
}

/***/ }),

/***/ "igAG":
/*!************************************************!*\
  !*** ./node_modules/quagga/dist/quagga.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (t, e) {
   true ? module.exports = e(e.toString()).default : undefined;
}(this, function (t) {
  return function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;
      var o = n[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
    }

    var n = {};
    return e.m = t, e.c = n, e.i = function (t) {
      return t;
    }, e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, {
        configurable: !1,
        enumerable: !0,
        get: r
      });
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return e.d(n, "a", n), n;
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, e.p = "/", e(e.s = 166);
  }([function (t, e) {
    function n(t) {
      var e = typeof t;
      return null != t && ("object" == e || "function" == e);
    }

    t.exports = n;
  }, function (t, e, n) {
    "use strict";

    function r(t, e) {
      return this._row = [], this.config = t || {}, this.supplements = e, this;
    }

    var o = n(3);
    r.prototype._nextUnset = function (t, e) {
      var n;

      for (void 0 === e && (e = 0), n = e; n < t.length; n++) {
        if (!t[n]) return n;
      }

      return t.length;
    }, r.prototype._matchPattern = function (t, e, n) {
      var r,
          o,
          i,
          a,
          u = 0,
          c = 0,
          s = 0,
          f = 0;

      for (n = n || this.SINGLE_CODE_ERROR || 1, r = 0; r < t.length; r++) {
        s += t[r], f += e[r];
      }

      if (s < f) return Number.MAX_VALUE;

      for (o = s / f, n *= o, r = 0; r < t.length; r++) {
        if (i = t[r], a = e[r] * o, (c = Math.abs(i - a) / a) > n) return Number.MAX_VALUE;
        u += c;
      }

      return u / f;
    }, r.prototype._nextSet = function (t, e) {
      var n;

      for (e = e || 0, n = e; n < t.length; n++) {
        if (t[n]) return n;
      }

      return t.length;
    }, r.prototype._correctBars = function (t, e, n) {
      for (var r = n.length, o = 0; r--;) {
        (o = t[n[r]] * (1 - (1 - e) / 2)) > 1 && (t[n[r]] = o);
      }
    }, r.prototype._matchTrace = function (t, e) {
      var n,
          r,
          o = [],
          i = this,
          a = i._nextSet(i._row),
          u = !i._row[a],
          c = 0,
          s = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0
      };

      if (t) {
        for (n = 0; n < t.length; n++) {
          o.push(0);
        }

        for (n = a; n < i._row.length; n++) {
          if (i._row[n] ^ u) o[c]++;else {
            if (c === o.length - 1) return r = i._matchPattern(o, t), r < e ? (s.start = n - a, s.end = n, s.counter = o, s) : null;
            c++, o[c] = 1, u = !u;
          }
        }
      } else for (o.push(0), n = a; n < i._row.length; n++) {
        i._row[n] ^ u ? o[c]++ : (c++, o.push(0), o[c] = 1, u = !u);
      }

      return s.start = a, s.end = i._row.length - 1, s.counter = o, s;
    }, r.prototype.decodePattern = function (t) {
      var e,
          n = this;
      return n._row = t, e = n._decode(), null === e ? (n._row.reverse(), (e = n._decode()) && (e.direction = r.DIRECTION.REVERSE, e.start = n._row.length - e.start, e.end = n._row.length - e.end)) : e.direction = r.DIRECTION.FORWARD, e && (e.format = n.FORMAT), e;
    }, r.prototype._matchRange = function (t, e, n) {
      var r;

      for (t = t < 0 ? 0 : t, r = t; r < e; r++) {
        if (this._row[r] !== n) return !1;
      }

      return !0;
    }, r.prototype._fillCounters = function (t, e, n) {
      var r,
          o = this,
          i = 0,
          a = [];

      for (n = void 0 === n || n, t = void 0 !== t ? t : o._nextUnset(o._row), e = e || o._row.length, a[i] = 0, r = t; r < e; r++) {
        o._row[r] ^ n ? a[i]++ : (i++, a[i] = 1, n = !n);
      }

      return a;
    }, r.prototype._toCounters = function (t, e) {
      var n,
          r = this,
          i = e.length,
          a = r._row.length,
          u = !r._row[t],
          c = 0;

      for (o.a.init(e, 0), n = t; n < a; n++) {
        if (r._row[n] ^ u) e[c]++;else {
          if (++c === i) break;
          e[c] = 1, u = !u;
        }
      }

      return e;
    }, Object.defineProperty(r.prototype, "FORMAT", {
      value: "unknown",
      writeable: !1
    }), r.DIRECTION = {
      FORWARD: 1,
      REVERSE: -1
    }, r.Exception = {
      StartNotFoundException: "Start-Info was not found!",
      CodeNotFoundException: "Code could not be found!",
      PatternNotFoundException: "Pattern could not be found!"
    }, r.CONFIG_KEYS = {}, e.a = r;
  }, function (t, e) {
    var n = Array.isArray;
    t.exports = n;
  }, function (t, e, n) {
    "use strict";

    e.a = {
      init: function init(t, e) {
        for (var n = t.length; n--;) {
          t[n] = e;
        }
      },
      shuffle: function shuffle(t) {
        var e,
            n,
            r = t.length - 1;

        for (r; r >= 0; r--) {
          e = Math.floor(Math.random() * r), n = t[r], t[r] = t[e], t[e] = n;
        }

        return t;
      },
      toPointList: function toPointList(t) {
        var e,
            n,
            r = [],
            o = [];

        for (e = 0; e < t.length; e++) {
          for (r = [], n = 0; n < t[e].length; n++) {
            r[n] = t[e][n];
          }

          o[e] = "[" + r.join(",") + "]";
        }

        return "[" + o.join(",\r\n") + "]";
      },
      threshold: function threshold(t, e, n) {
        var r,
            o = [];

        for (r = 0; r < t.length; r++) {
          n.apply(t, [t[r]]) >= e && o.push(t[r]);
        }

        return o;
      },
      maxIndex: function maxIndex(t) {
        var e,
            n = 0;

        for (e = 0; e < t.length; e++) {
          t[e] > t[n] && (n = e);
        }

        return n;
      },
      max: function t(e) {
        var n,
            t = 0;

        for (n = 0; n < e.length; n++) {
          e[n] > t && (t = e[n]);
        }

        return t;
      },
      sum: function t(e) {
        for (var n = e.length, t = 0; n--;) {
          t += e[n];
        }

        return t;
      }
    };
  }, function (t, e, n) {
    "use strict";

    function r(t, e) {
      t = a()(o(), t), u.a.call(this, t, e);
    }

    function o() {
      var t = {};
      return Object.keys(r.CONFIG_KEYS).forEach(function (e) {
        t[e] = r.CONFIG_KEYS[e].default;
      }), t;
    }

    var i = n(28),
        a = n.n(i),
        u = n(1),
        c = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
      }

      return t;
    },
        s = {
      CODE_L_START: {
        value: 0
      },
      CODE_G_START: {
        value: 10
      },
      START_PATTERN: {
        value: [1, 1, 1]
      },
      STOP_PATTERN: {
        value: [1, 1, 1]
      },
      MIDDLE_PATTERN: {
        value: [1, 1, 1, 1, 1]
      },
      EXTENSION_START_PATTERN: {
        value: [1, 1, 2]
      },
      CODE_PATTERN: {
        value: [[3, 2, 1, 1], [2, 2, 2, 1], [2, 1, 2, 2], [1, 4, 1, 1], [1, 1, 3, 2], [1, 2, 3, 1], [1, 1, 1, 4], [1, 3, 1, 2], [1, 2, 1, 3], [3, 1, 1, 2], [1, 1, 2, 3], [1, 2, 2, 2], [2, 2, 1, 2], [1, 1, 4, 1], [2, 3, 1, 1], [1, 3, 2, 1], [4, 1, 1, 1], [2, 1, 3, 1], [3, 1, 2, 1], [2, 1, 1, 3]]
      },
      CODE_FREQUENCY: {
        value: [0, 11, 13, 14, 19, 25, 28, 21, 22, 26]
      },
      SINGLE_CODE_ERROR: {
        value: .7
      },
      AVG_CODE_ERROR: {
        value: .48
      },
      FORMAT: {
        value: "ean_13",
        writeable: !1
      }
    };

    r.prototype = Object.create(u.a.prototype, s), r.prototype.constructor = r, r.prototype._decodeCode = function (t, e) {
      var n,
          r,
          o,
          i = [0, 0, 0, 0],
          a = this,
          u = t,
          c = !a._row[u],
          s = 0,
          f = {
        error: Number.MAX_VALUE,
        code: -1,
        start: t,
        end: t
      };

      for (e || (e = a.CODE_PATTERN.length), n = u; n < a._row.length; n++) {
        if (a._row[n] ^ c) i[s]++;else {
          if (s === i.length - 1) {
            for (r = 0; r < e; r++) {
              (o = a._matchPattern(i, a.CODE_PATTERN[r])) < f.error && (f.code = r, f.error = o);
            }

            return f.end = n, f.error > a.AVG_CODE_ERROR ? null : f;
          }

          s++, i[s] = 1, c = !c;
        }
      }

      return null;
    }, r.prototype._findPattern = function (t, e, n, r, o) {
      var i,
          a,
          u,
          c,
          s = [],
          f = this,
          l = 0,
          d = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0
      };

      for (e || (e = f._nextSet(f._row)), void 0 === n && (n = !1), void 0 === r && (r = !0), void 0 === o && (o = f.AVG_CODE_ERROR), i = 0; i < t.length; i++) {
        s[i] = 0;
      }

      for (i = e; i < f._row.length; i++) {
        if (f._row[i] ^ n) s[l]++;else {
          if (l === s.length - 1) {
            for (c = 0, u = 0; u < s.length; u++) {
              c += s[u];
            }

            if ((a = f._matchPattern(s, t)) < o) return d.error = a, d.start = i - c, d.end = i, d;
            if (!r) return null;

            for (u = 0; u < s.length - 2; u++) {
              s[u] = s[u + 2];
            }

            s[s.length - 2] = 0, s[s.length - 1] = 0, l--;
          } else l++;

          s[l] = 1, n = !n;
        }
      }

      return null;
    }, r.prototype._findStart = function () {
      for (var t, e, n = this, r = n._nextSet(n._row); !e;) {
        if (!(e = n._findPattern(n.START_PATTERN, r))) return null;
        if ((t = e.start - (e.end - e.start)) >= 0 && n._matchRange(t, e.start, 0)) return e;
        r = e.end, e = null;
      }
    }, r.prototype._verifyTrailingWhitespace = function (t) {
      var e,
          n = this;
      return e = t.end + (t.end - t.start), e < n._row.length && n._matchRange(t.end, e, 0) ? t : null;
    }, r.prototype._findEnd = function (t, e) {
      var n = this,
          r = n._findPattern(n.STOP_PATTERN, t, e, !1);

      return null !== r ? n._verifyTrailingWhitespace(r) : null;
    }, r.prototype._calculateFirstDigit = function (t) {
      var e,
          n = this;

      for (e = 0; e < n.CODE_FREQUENCY.length; e++) {
        if (t === n.CODE_FREQUENCY[e]) return e;
      }

      return null;
    }, r.prototype._decodePayload = function (t, e, n) {
      var r,
          o,
          i = this,
          a = 0;

      for (r = 0; r < 6; r++) {
        if (!(t = i._decodeCode(t.end))) return null;
        t.code >= i.CODE_G_START ? (t.code = t.code - i.CODE_G_START, a |= 1 << 5 - r) : a |= 0 << 5 - r, e.push(t.code), n.push(t);
      }

      if (null === (o = i._calculateFirstDigit(a))) return null;
      if (e.unshift(o), null === (t = i._findPattern(i.MIDDLE_PATTERN, t.end, !0, !1))) return null;

      for (n.push(t), r = 0; r < 6; r++) {
        if (!(t = i._decodeCode(t.end, i.CODE_G_START))) return null;
        n.push(t), e.push(t.code);
      }

      return t;
    }, r.prototype._decode = function () {
      var t,
          e,
          n = this,
          r = [],
          o = [],
          i = {};
      if (!(t = n._findStart())) return null;
      if (e = {
        code: t.code,
        start: t.start,
        end: t.end
      }, o.push(e), !(e = n._decodePayload(e, r, o))) return null;
      if (!(e = n._findEnd(e.end, !1))) return null;
      if (o.push(e), !n._checksum(r)) return null;

      if (this.supplements.length > 0) {
        var a = this._decodeExtensions(e.end);

        if (!a) return null;
        var u = a.decodedCodes[a.decodedCodes.length - 1],
            s = {
          start: u.start + ((u.end - u.start) / 2 | 0),
          end: u.end
        };
        if (!n._verifyTrailingWhitespace(s)) return null;
        i = {
          supplement: a,
          code: r.join("") + a.code
        };
      }

      return c({
        code: r.join(""),
        start: t.start,
        end: e.end,
        codeset: "",
        startInfo: t,
        decodedCodes: o
      }, i);
    }, r.prototype._decodeExtensions = function (t) {
      var e,
          n,
          r = this._nextSet(this._row, t),
          o = this._findPattern(this.EXTENSION_START_PATTERN, r, !1, !1);

      if (null === o) return null;

      for (e = 0; e < this.supplements.length; e++) {
        if (null !== (n = this.supplements[e].decode(this._row, o.end))) return {
          code: n.code,
          start: r,
          startInfo: o,
          end: n.end,
          codeset: "",
          decodedCodes: n.decodedCodes
        };
      }

      return null;
    }, r.prototype._checksum = function (t) {
      var e,
          n = 0;

      for (e = t.length - 2; e >= 0; e -= 2) {
        n += t[e];
      }

      for (n *= 3, e = t.length - 1; e >= 0; e -= 2) {
        n += t[e];
      }

      return n % 10 == 0;
    }, r.CONFIG_KEYS = {
      supplements: {
        type: "arrayOf(string)",
        default: [],
        description: "Allowed extensions to be decoded (2 and/or 5)"
      }
    }, e.a = r;
  }, function (t, e, n) {
    var r = n(38),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = r || o || Function("return this")();
    t.exports = i;
  }, function (t, e) {
    function n(t) {
      return null != t && "object" == typeof t;
    }

    t.exports = n;
  }, function (t, e) {
    function n(t) {
      var e = new Float32Array(2);
      return e[0] = t[0], e[1] = t[1], e;
    }

    t.exports = n;
  }, function (t, e, n) {
    function r(t) {
      return null == t ? void 0 === t ? c : u : s && s in Object(t) ? i(t) : a(t);
    }

    var o = n(11),
        i = n(119),
        a = n(146),
        u = "[object Null]",
        c = "[object Undefined]",
        s = o ? o.toStringTag : void 0;
    t.exports = r;
  }, function (t, e, n) {
    "use strict";

    e.a = {
      drawRect: function drawRect(t, e, n, r) {
        n.strokeStyle = r.color, n.fillStyle = r.color, n.lineWidth = 1, n.beginPath(), n.strokeRect(t.x, t.y, e.x, e.y);
      },
      drawPath: function drawPath(t, e, n, r) {
        n.strokeStyle = r.color, n.fillStyle = r.color, n.lineWidth = r.lineWidth, n.beginPath(), n.moveTo(t[0][e.x], t[0][e.y]);

        for (var o = 1; o < t.length; o++) {
          n.lineTo(t[o][e.x], t[o][e.y]);
        }

        n.closePath(), n.stroke();
      },
      drawImage: function drawImage(t, e, n) {
        var r,
            o = n.getImageData(0, 0, e.x, e.y),
            i = o.data,
            a = t.length,
            u = i.length;
        if (u / a != 4) return !1;

        for (; a--;) {
          r = t[a], i[--u] = 255, i[--u] = r, i[--u] = r, i[--u] = r;
        }

        return n.putImageData(o, 0, 0), !0;
      }
    };
  }, function (t, e, n) {
    function r(t) {
      var e = -1,
          n = null == t ? 0 : t.length;

      for (this.clear(); ++e < n;) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }

    var o = n(133),
        i = n(134),
        a = n(135),
        u = n(136),
        c = n(137);
    r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = a, r.prototype.has = u, r.prototype.set = c, t.exports = r;
  }, function (t, e, n) {
    var r = n(5),
        o = r.Symbol;
    t.exports = o;
  }, function (t, e, n) {
    function r(t, e) {
      for (var n = t.length; n--;) {
        if (o(t[n][0], e)) return n;
      }

      return -1;
    }

    var o = n(17);
    t.exports = r;
  }, function (t, e, n) {
    function r(t, e) {
      return o(t) ? t : i(t, e) ? [t] : a(u(t));
    }

    var o = n(2),
        i = n(130),
        a = n(154),
        u = n(165);
    t.exports = r;
  }, function (t, e, n) {
    function r(t, e) {
      var n = t.__data__;
      return o(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
    }

    var o = n(131);
    t.exports = r;
  }, function (t, e) {
    function n(t, e) {
      return !!(e = null == e ? r : e) && ("number" == typeof t || o.test(t)) && t > -1 && t % 1 == 0 && t < e;
    }

    var r = 9007199254740991,
        o = /^(?:0|[1-9]\d*)$/;
    t.exports = n;
  }, function (t, e, n) {
    var r = n(22),
        o = r(Object, "create");
    t.exports = o;
  }, function (t, e) {
    function n(t, e) {
      return t === e || t !== t && e !== e;
    }

    t.exports = n;
  }, function (t, e, n) {
    var r = n(96),
        o = n(6),
        i = Object.prototype,
        a = i.hasOwnProperty,
        u = i.propertyIsEnumerable,
        c = r(function () {
      return arguments;
    }()) ? r : function (t) {
      return o(t) && a.call(t, "callee") && !u.call(t, "callee");
    };
    t.exports = c;
  }, function (t, e, n) {
    "use strict";

    function r(t, e) {
      return {
        x: t,
        y: e,
        toVec2: function toVec2() {
          return b.clone([this.x, this.y]);
        },
        toVec3: function toVec3() {
          return E.clone([this.x, this.y, 1]);
        },
        round: function round() {
          return this.x = this.x > 0 ? Math.floor(this.x + .5) : Math.floor(this.x - .5), this.y = this.y > 0 ? Math.floor(this.y + .5) : Math.floor(this.y - .5), this;
        }
      };
    }

    function o(t, e, n) {
      n || (n = t);

      for (var r = t.data, o = r.length, i = n.data; o--;) {
        i[o] = r[o] < e ? 1 : 0;
      }
    }

    function i(t, e) {
      e || (e = 8);

      for (var n = t.data, r = n.length, o = 8 - e, i = 1 << e, a = new Int32Array(i); r--;) {
        a[n[r] >> o]++;
      }

      return a;
    }

    function a(t, e) {
      function n(t, e) {
        var n,
            r = 0;

        for (n = t; n <= e; n++) {
          r += a[n];
        }

        return r;
      }

      function r(t, e) {
        var n,
            r = 0;

        for (n = t; n <= e; n++) {
          r += n * a[n];
        }

        return r;
      }

      function o() {
        var o,
            u,
            c,
            s,
            f,
            l,
            d,
            h = [0],
            p = (1 << e) - 1;

        for (a = i(t, e), s = 1; s < p; s++) {
          o = n(0, s), u = n(s + 1, p), c = o * u, 0 === c && (c = 1), f = r(0, s) * u, l = r(s + 1, p) * o, d = f - l, h[s] = d * d / c;
        }

        return x.a.maxIndex(h);
      }

      e || (e = 8);
      var a,
          u = 8 - e;
      return o() << u;
    }

    function u(t, e) {
      var n = a(t);
      return o(t, n, e), n;
    }

    function c(t, e, n) {
      function r(t) {
        var e = !1;

        for (i = 0; i < c.length; i++) {
          a = c[i], a.fits(t) && (a.add(t), e = !0);
        }

        return e;
      }

      var o,
          i,
          a,
          u,
          c = [];

      for (n || (n = "rad"), o = 0; o < t.length; o++) {
        u = m.a.createPoint(t[o], o, n), r(u) || c.push(m.a.create(u, e));
      }

      return c;
    }

    function s(t, e, n) {
      var r,
          o,
          i,
          a,
          u = 0,
          c = 0,
          s = [];

      for (r = 0; r < e; r++) {
        s[r] = {
          score: 0,
          item: null
        };
      }

      for (r = 0; r < t.length; r++) {
        if ((o = n.apply(this, [t[r]])) > c) for (i = s[u], i.score = o, i.item = t[r], c = Number.MAX_VALUE, a = 0; a < e; a++) {
          s[a].score < c && (c = s[a].score, u = a);
        }
      }

      return s;
    }

    function f(t, e, n) {
      for (var r, o = 0, i = e.x, a = Math.floor(t.length / 4), u = e.x / 2, c = 0, s = e.x; i < a;) {
        for (r = 0; r < u; r++) {
          n[c] = (.299 * t[4 * o + 0] + .587 * t[4 * o + 1] + .114 * t[4 * o + 2] + (.299 * t[4 * (o + 1) + 0] + .587 * t[4 * (o + 1) + 1] + .114 * t[4 * (o + 1) + 2]) + (.299 * t[4 * i + 0] + .587 * t[4 * i + 1] + .114 * t[4 * i + 2]) + (.299 * t[4 * (i + 1) + 0] + .587 * t[4 * (i + 1) + 1] + .114 * t[4 * (i + 1) + 2])) / 4, c++, o += 2, i += 2;
        }

        o += s, i += s;
      }
    }

    function l(t, e, n) {
      var r,
          o = t.length / 4 | 0;
      if (n && n.singleChannel === !0) for (r = 0; r < o; r++) {
        e[r] = t[4 * r + 0];
      } else for (r = 0; r < o; r++) {
        e[r] = .299 * t[4 * r + 0] + .587 * t[4 * r + 1] + .114 * t[4 * r + 2];
      }
    }

    function d(t, e) {
      for (var n = t.data, r = t.size.x, o = e.data, i = 0, a = r, u = n.length, c = r / 2, s = 0; a < u;) {
        for (var f = 0; f < c; f++) {
          o[s] = Math.floor((n[i] + n[i + 1] + n[a] + n[a + 1]) / 4), s++, i += 2, a += 2;
        }

        i += r, a += r;
      }
    }

    function h(t, e) {
      var n = t[0],
          r = t[1],
          o = t[2],
          i = o * r,
          a = i * (1 - Math.abs(n / 60 % 2 - 1)),
          u = o - i,
          c = 0,
          s = 0,
          f = 0;
      return e = e || [0, 0, 0], n < 60 ? (c = i, s = a) : n < 120 ? (c = a, s = i) : n < 180 ? (s = i, f = a) : n < 240 ? (s = a, f = i) : n < 300 ? (c = a, f = i) : n < 360 && (c = i, f = a), e[0] = 255 * (c + u) | 0, e[1] = 255 * (s + u) | 0, e[2] = 255 * (f + u) | 0, e;
    }

    function p(t) {
      var e,
          n = [],
          r = [];

      for (e = 1; e < Math.sqrt(t) + 1; e++) {
        t % e == 0 && (r.push(e), e !== t / e && n.unshift(Math.floor(t / e)));
      }

      return r.concat(n);
    }

    function v(t, e) {
      for (var n = 0, r = 0, o = []; n < t.length && r < e.length;) {
        t[n] === e[r] ? (o.push(t[n]), n++, r++) : t[n] > e[r] ? r++ : n++;
      }

      return o;
    }

    function _(t, e) {
      function n(t) {
        for (var e = 0, n = t[Math.floor(t.length / 2)]; e < t.length - 1 && t[e] < d;) {
          e++;
        }

        return e > 0 && (n = Math.abs(t[e] - d) > Math.abs(t[e - 1] - d) ? t[e - 1] : t[e]), d / n < c[f + 1] / c[f] && d / n > c[f - 1] / c[f] ? {
          x: n,
          y: n
        } : null;
      }

      var r,
          o = p(e.x),
          i = p(e.y),
          a = Math.max(e.x, e.y),
          u = v(o, i),
          c = [8, 10, 15, 20, 32, 60, 80],
          s = {
        "x-small": 5,
        small: 4,
        medium: 3,
        large: 2,
        "x-large": 1
      },
          f = s[t] || s.medium,
          l = c[f],
          d = Math.floor(a / l);
      return r = n(u), r || (r = n(p(a))) || (r = n(p(d * l))), r;
    }

    function g(t) {
      return {
        value: parseFloat(t),
        unit: (t.indexOf("%"), t.length, "%")
      };
    }

    function y(t, e, n) {
      var r = {
        width: t,
        height: e
      },
          o = Object.keys(n).reduce(function (t, e) {
        var o = n[e],
            i = g(o),
            a = C[e](i, r);
        return t[e] = a, t;
      }, {});
      return {
        sx: o.left,
        sy: o.top,
        sw: o.right - o.left,
        sh: o.bottom - o.top
      };
    }

    var m = n(50),
        x = n(3);
    e.b = r, e.f = u, e.g = c, e.h = s, e.c = f, e.d = l, e.i = d, e.a = h, e.e = _, e.j = y;
    var b = {
      clone: n(7)
    },
        E = {
      clone: n(83)
    },
        C = {
      top: function top(t, e) {
        if ("%" === t.unit) return Math.floor(e.height * (t.value / 100));
      },
      right: function right(t, e) {
        if ("%" === t.unit) return Math.floor(e.width - e.width * (t.value / 100));
      },
      bottom: function bottom(t, e) {
        if ("%" === t.unit) return Math.floor(e.height - e.height * (t.value / 100));
      },
      left: function left(t, e) {
        if ("%" === t.unit) return Math.floor(e.width * (t.value / 100));
      }
    };
  }, function (t, e, n) {
    "use strict";

    function r(t, e, n, r) {
      e ? this.data = e : n ? (this.data = new n(t.x * t.y), n === Array && r && a.a.init(this.data, 0)) : (this.data = new Uint8Array(t.x * t.y), Uint8Array === Array && r && a.a.init(this.data, 0)), this.size = t;
    }

    var o = n(53),
        i = n(19),
        a = n(3),
        u = {
      clone: n(7)
    };
    r.prototype.inImageWithBorder = function (t, e) {
      return t.x >= e && t.y >= e && t.x < this.size.x - e && t.y < this.size.y - e;
    }, r.sample = function (t, e, n) {
      var r = Math.floor(e),
          o = Math.floor(n),
          i = t.size.x,
          a = o * t.size.x + r,
          u = t.data[a + 0],
          c = t.data[a + 1],
          s = t.data[a + i],
          f = t.data[a + i + 1],
          l = u - c;
      return e -= r, n -= o, Math.floor(e * (n * (l - s + f) - l) + n * (s - u) + u);
    }, r.clearArray = function (t) {
      for (var e = t.length; e--;) {
        t[e] = 0;
      }
    }, r.prototype.subImage = function (t, e) {
      return new o.a(t, e, this);
    }, r.prototype.subImageAsCopy = function (t, e) {
      var n,
          r,
          o = t.size.y,
          i = t.size.x;

      for (n = 0; n < i; n++) {
        for (r = 0; r < o; r++) {
          t.data[r * i + n] = this.data[(e.y + r) * this.size.x + e.x + n];
        }
      }
    }, r.prototype.copyTo = function (t) {
      for (var e = this.data.length, n = this.data, r = t.data; e--;) {
        r[e] = n[e];
      }
    }, r.prototype.get = function (t, e) {
      return this.data[e * this.size.x + t];
    }, r.prototype.getSafe = function (t, e) {
      var n;

      if (!this.indexMapping) {
        for (this.indexMapping = {
          x: [],
          y: []
        }, n = 0; n < this.size.x; n++) {
          this.indexMapping.x[n] = n, this.indexMapping.x[n + this.size.x] = n;
        }

        for (n = 0; n < this.size.y; n++) {
          this.indexMapping.y[n] = n, this.indexMapping.y[n + this.size.y] = n;
        }
      }

      return this.data[this.indexMapping.y[e + this.size.y] * this.size.x + this.indexMapping.x[t + this.size.x]];
    }, r.prototype.set = function (t, e, n) {
      return this.data[e * this.size.x + t] = n, this;
    }, r.prototype.zeroBorder = function () {
      var t,
          e = this.size.x,
          n = this.size.y,
          r = this.data;

      for (t = 0; t < e; t++) {
        r[t] = r[(n - 1) * e + t] = 0;
      }

      for (t = 1; t < n - 1; t++) {
        r[t * e] = r[t * e + (e - 1)] = 0;
      }
    }, r.prototype.invert = function () {
      for (var t = this.data, e = t.length; e--;) {
        t[e] = t[e] ? 0 : 1;
      }
    }, r.prototype.convolve = function (t) {
      var e,
          n,
          r,
          o,
          i = t.length / 2 | 0,
          a = 0;

      for (n = 0; n < this.size.y; n++) {
        for (e = 0; e < this.size.x; e++) {
          for (a = 0, o = -i; o <= i; o++) {
            for (r = -i; r <= i; r++) {
              a += t[o + i][r + i] * this.getSafe(e + r, n + o);
            }
          }

          this.data[n * this.size.x + e] = a;
        }
      }
    }, r.prototype.moments = function (t) {
      var e,
          n,
          r,
          o,
          i,
          a,
          c,
          s,
          f,
          l,
          d,
          h,
          p = this.data,
          v = this.size.y,
          _ = this.size.x,
          g = [],
          y = [],
          m = Math.PI,
          x = m / 4;
      if (t <= 0) return y;

      for (i = 0; i < t; i++) {
        g[i] = {
          m00: 0,
          m01: 0,
          m10: 0,
          m11: 0,
          m02: 0,
          m20: 0,
          theta: 0,
          rad: 0
        };
      }

      for (n = 0; n < v; n++) {
        for (o = n * n, e = 0; e < _; e++) {
          (r = p[n * _ + e]) > 0 && (a = g[r - 1], a.m00 += 1, a.m01 += n, a.m10 += e, a.m11 += e * n, a.m02 += o, a.m20 += e * e);
        }
      }

      for (i = 0; i < t; i++) {
        a = g[i], isNaN(a.m00) || 0 === a.m00 || (l = a.m10 / a.m00, d = a.m01 / a.m00, c = a.m11 / a.m00 - l * d, s = a.m02 / a.m00 - d * d, f = a.m20 / a.m00 - l * l, h = (s - f) / (2 * c), h = .5 * Math.atan(h) + (c >= 0 ? x : -x) + m, a.theta = (180 * h / m + 90) % 180 - 90, a.theta < 0 && (a.theta += 180), a.rad = h > m ? h - m : h, a.vec = u.clone([Math.cos(h), Math.sin(h)]), y.push(a));
      }

      return y;
    }, r.prototype.show = function (t, e) {
      var n, r, o, i, a, u, c;

      for (e || (e = 1), n = t.getContext("2d"), t.width = this.size.x, t.height = this.size.y, r = n.getImageData(0, 0, t.width, t.height), o = r.data, i = 0, c = 0; c < this.size.y; c++) {
        for (u = 0; u < this.size.x; u++) {
          a = c * this.size.x + u, i = this.get(u, c) * e, o[4 * a + 0] = i, o[4 * a + 1] = i, o[4 * a + 2] = i, o[4 * a + 3] = 255;
        }
      }

      n.putImageData(r, 0, 0);
    }, r.prototype.overlay = function (t, e, r) {
      (!e || e < 0 || e > 360) && (e = 360);

      for (var o = [0, 1, 1], a = [0, 0, 0], u = [255, 255, 255], c = [0, 0, 0], s = [], f = t.getContext("2d"), l = f.getImageData(r.x, r.y, this.size.x, this.size.y), d = l.data, h = this.data.length; h--;) {
        o[0] = this.data[h] * e, s = o[0] <= 0 ? u : o[0] >= 360 ? c : n.i(i.a)(o, a), d[4 * h + 0] = s[0], d[4 * h + 1] = s[1], d[4 * h + 2] = s[2], d[4 * h + 3] = 255;
      }

      f.putImageData(l, r.x, r.y);
    }, e.a = r;
  }, function (t, e, n) {
    function r(t, e, n) {
      "__proto__" == e && o ? o(t, e, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
      }) : t[e] = n;
    }

    var o = n(37);
    t.exports = r;
  }, function (t, e, n) {
    function r(t, e) {
      var n = i(t, e);
      return o(n) ? n : void 0;
    }

    var o = n(97),
        i = n(120);
    t.exports = r;
  }, function (t, e, n) {
    function r(t) {
      if ("string" == typeof t || o(t)) return t;
      var e = t + "";
      return "0" == e && 1 / t == -i ? "-0" : e;
    }

    var o = n(27),
        i = 1 / 0;
    t.exports = r;
  }, function (t, e, n) {
    function r(t) {
      return null != t && i(t.length) && !o(t);
    }

    var o = n(25),
        i = n(26);
    t.exports = r;
  }, function (t, e, n) {
    function r(t) {
      if (!i(t)) return !1;
      var e = o(t);
      return e == u || e == c || e == a || e == s;
    }

    var o = n(8),
        i = n(0),
        a = "[object AsyncFunction]",
        u = "[object Function]",
        c = "[object GeneratorFunction]",
        s = "[object Proxy]";
    t.exports = r;
  }, function (t, e) {
    function n(t) {
      return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r;
    }

    var r = 9007199254740991;
    t.exports = n;
  }, function (t, e, n) {
    function r(t) {
      return "symbol" == typeof t || i(t) && o(t) == a;
    }

    var o = n(8),
        i = n(6),
        a = "[object Symbol]";
    t.exports = r;
  }, function (t, e, n) {
    var r = n(100),
        o = n(116),
        i = o(function (t, e, n) {
      r(t, e, n);
    });
    t.exports = i;
  }, function (t, e) {
    t.exports = function (t) {
      return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
        enumerable: !0,
        get: function get() {
          return t.l;
        }
      }), Object.defineProperty(t, "id", {
        enumerable: !0,
        get: function get() {
          return t.i;
        }
      }), t.webpackPolyfill = 1), t;
    };
  }, function (t, e, n) {
    "use strict";

    var r = {
      searchDirections: [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]],
      create: function create(t, e) {
        function n(t, e, n, r) {
          var o, f, l;

          for (o = 0; o < 7; o++) {
            if (f = t.cy + c[t.dir][0], l = t.cx + c[t.dir][1], i = f * s + l, a[i] === e && (0 === u[i] || u[i] === n)) return u[i] = n, t.cy = f, t.cx = l, !0;
            0 === u[i] && (u[i] = r), t.dir = (t.dir + 1) % 8;
          }

          return !1;
        }

        function r(t, e, n) {
          return {
            dir: n,
            x: t,
            y: e,
            next: null,
            prev: null
          };
        }

        function o(t, e, o, i, a) {
          var u,
              c,
              s,
              f = null,
              l = {
            cx: e,
            cy: t,
            dir: 0
          };

          if (n(l, i, o, a)) {
            f = r(e, t, l.dir), u = f, s = l.dir, c = r(l.cx, l.cy, 0), c.prev = u, u.next = c, c.next = null, u = c;

            do {
              l.dir = (l.dir + 6) % 8, n(l, i, o, a), s !== l.dir ? (u.dir = l.dir, c = r(l.cx, l.cy, 0), c.prev = u, u.next = c, c.next = null, u = c) : (u.dir = s, u.x = l.cx, u.y = l.cy), s = l.dir;
            } while (l.cx !== e || l.cy !== t);

            f.prev = u.prev, u.prev.next = f;
          }

          return f;
        }

        var i,
            a = t.data,
            u = e.data,
            c = this.searchDirections,
            s = t.size.x;
        return {
          trace: function trace(t, e, r, o) {
            return n(t, e, r, o);
          },
          contourTracing: function contourTracing(t, e, n, r, i) {
            return o(t, e, n, r, i);
          }
        };
      }
    };
    e.a = r;
  }, function (t, e, n) {
    "use strict";

    function r() {
      o.a.call(this);
    }

    var o = n(1),
        i = n(3),
        a = {
      ALPHABETH_STRING: {
        value: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. *$/+%"
      },
      ALPHABET: {
        value: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 45, 46, 32, 42, 36, 47, 43, 37]
      },
      CHARACTER_ENCODINGS: {
        value: [52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73, 328, 25, 280, 88, 13, 268, 76, 28, 259, 67, 322, 19, 274, 82, 7, 262, 70, 22, 385, 193, 448, 145, 400, 208, 133, 388, 196, 148, 168, 162, 138, 42]
      },
      ASTERISK: {
        value: 148
      },
      FORMAT: {
        value: "code_39",
        writeable: !1
      }
    };
    r.prototype = Object.create(o.a.prototype, a), r.prototype.constructor = r, r.prototype._decode = function () {
      var t,
          e,
          n,
          r,
          o = this,
          a = [0, 0, 0, 0, 0, 0, 0, 0, 0],
          u = [],
          c = o._findStart();

      if (!c) return null;
      r = o._nextSet(o._row, c.end);

      do {
        if (a = o._toCounters(r, a), (n = o._toPattern(a)) < 0) return null;
        if ((t = o._patternToChar(n)) < 0) return null;
        u.push(t), e = r, r += i.a.sum(a), r = o._nextSet(o._row, r);
      } while ("*" !== t);

      return u.pop(), u.length && o._verifyTrailingWhitespace(e, r, a) ? {
        code: u.join(""),
        start: c.start,
        end: r,
        startInfo: c,
        decodedCodes: u
      } : null;
    }, r.prototype._verifyTrailingWhitespace = function (t, e, n) {
      var r = i.a.sum(n);
      return 3 * (e - t - r) >= r;
    }, r.prototype._patternToChar = function (t) {
      var e,
          n = this;

      for (e = 0; e < n.CHARACTER_ENCODINGS.length; e++) {
        if (n.CHARACTER_ENCODINGS[e] === t) return String.fromCharCode(n.ALPHABET[e]);
      }

      return -1;
    }, r.prototype._findNextWidth = function (t, e) {
      var n,
          r = Number.MAX_VALUE;

      for (n = 0; n < t.length; n++) {
        t[n] < r && t[n] > e && (r = t[n]);
      }

      return r;
    }, r.prototype._toPattern = function (t) {
      for (var e, n, r = t.length, o = 0, i = r, a = 0, u = this; i > 3;) {
        for (o = u._findNextWidth(t, o), i = 0, e = 0, n = 0; n < r; n++) {
          t[n] > o && (e |= 1 << r - 1 - n, i++, a += t[n]);
        }

        if (3 === i) {
          for (n = 0; n < r && i > 0; n++) {
            if (t[n] > o && (i--, 2 * t[n] >= a)) return -1;
          }

          return e;
        }
      }

      return -1;
    }, r.prototype._findStart = function () {
      var t,
          e,
          n,
          r = this,
          o = r._nextSet(r._row),
          i = o,
          a = [0, 0, 0, 0, 0, 0, 0, 0, 0],
          u = 0,
          c = !1;

      for (t = o; t < r._row.length; t++) {
        if (r._row[t] ^ c) a[u]++;else {
          if (u === a.length - 1) {
            if (r._toPattern(a) === r.ASTERISK && (n = Math.floor(Math.max(0, i - (t - i) / 4)), r._matchRange(n, i, 0))) return {
              start: i,
              end: t
            };

            for (i += a[0] + a[1], e = 0; e < 7; e++) {
              a[e] = a[e + 2];
            }

            a[7] = 0, a[8] = 0, u--;
          } else u++;

          a[u] = 1, c = !c;
        }
      }

      return null;
    }, e.a = r;
  }, function (t, e) {
    function n(t, e) {
      return t[0] * e[0] + t[1] * e[1];
    }

    t.exports = n;
  }, function (t, e, n) {
    var r = n(22),
        o = n(5),
        i = r(o, "Map");
    t.exports = i;
  }, function (t, e, n) {
    function r(t) {
      var e = -1,
          n = null == t ? 0 : t.length;

      for (this.clear(); ++e < n;) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }

    var o = n(138),
        i = n(139),
        a = n(140),
        u = n(141),
        c = n(142);
    r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = a, r.prototype.has = u, r.prototype.set = c, t.exports = r;
  }, function (t, e, n) {
    function r(t, e, n) {
      (void 0 === n || i(t[e], n)) && (void 0 !== n || e in t) || o(t, e, n);
    }

    var o = n(21),
        i = n(17);
    t.exports = r;
  }, function (t, e, n) {
    function r(t, e, n) {
      var r = t[e];
      u.call(t, e) && i(r, n) && (void 0 !== n || e in t) || o(t, e, n);
    }

    var o = n(21),
        i = n(17),
        a = Object.prototype,
        u = a.hasOwnProperty;
    t.exports = r;
  }, function (t, e, n) {
    var r = n(22),
        o = function () {
      try {
        var t = r(Object, "defineProperty");
        return t({}, "", {}), t;
      } catch (t) {}
    }();

    t.exports = o;
  }, function (t, e, n) {
    (function (e) {
      var n = "object" == typeof e && e && e.Object === Object && e;
      t.exports = n;
    }).call(e, n(47));
  }, function (t, e, n) {
    var r = n(147),
        o = r(Object.getPrototypeOf, Object);
    t.exports = o;
  }, function (t, e) {
    function n(t) {
      var e = t && t.constructor;
      return t === ("function" == typeof e && e.prototype || r);
    }

    var r = Object.prototype;
    t.exports = n;
  }, function (t, e, n) {
    function r(t, e, n) {
      return e = i(void 0 === e ? t.length - 1 : e, 0), function () {
        for (var r = arguments, a = -1, u = i(r.length - e, 0), c = Array(u); ++a < u;) {
          c[a] = r[e + a];
        }

        a = -1;

        for (var s = Array(e + 1); ++a < e;) {
          s[a] = r[a];
        }

        return s[e] = n(c), o(t, this, s);
      };
    }

    var o = n(87),
        i = Math.max;
    t.exports = r;
  }, function (t, e, n) {
    var r = n(106),
        o = n(148),
        i = o(r);
    t.exports = i;
  }, function (t, e) {
    function n(t) {
      return t;
    }

    t.exports = n;
  }, function (t, e, n) {
    (function (t) {
      var r = n(5),
          o = n(163),
          i = "object" == typeof e && e && !e.nodeType && e,
          a = i && "object" == typeof t && t && !t.nodeType && t,
          u = a && a.exports === i,
          c = u ? r.Buffer : void 0,
          s = c ? c.isBuffer : void 0,
          f = s || o;
      t.exports = f;
    }).call(e, n(29)(t));
  }, function (t, e, n) {
    var r = n(98),
        o = n(109),
        i = n(145),
        a = i && i.isTypedArray,
        u = a ? o(a) : r;
    t.exports = u;
  }, function (t, e, n) {
    function r(t) {
      return a(t) ? o(t, !0) : i(t);
    }

    var o = n(88),
        i = n(99),
        a = n(24);
    t.exports = r;
  }, function (t, e) {
    var n;

    n = function () {
      return this;
    }();

    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" == typeof window && (n = window);
    }

    t.exports = n;
  }, function (e, n, r) {
    "use strict";

    function o(t) {
      f(t), P = k.a.create($.decoder, S);
    }

    function i(t) {
      var e;
      if ("VideoStream" === $.inputStream.type) e = document.createElement("video"), R = H.a.createVideoStream(e);else if ("ImageStream" === $.inputStream.type) R = H.a.createImageStream();else if ("LiveStream" === $.inputStream.type) {
        var n = a();
        n && ((e = n.querySelector("video")) || (e = document.createElement("video"), n.appendChild(e))), R = H.a.createLiveStream(e), F.a.request(e, $.inputStream.constraints).then(function () {
          R.trigger("canrecord");
        }).catch(function (e) {
          return t(e);
        });
      }
      R.setAttribute("preload", "auto"), R.setInputStream($.inputStream), R.addEventListener("canrecord", u.bind(void 0, t));
    }

    function a() {
      var t = $.inputStream.target;
      if (t && t.nodeName && 1 === t.nodeType) return t;
      var e = "string" == typeof t ? t : "#interactive.viewport";
      return document.querySelector(e);
    }

    function u(t) {
      U.a.checkImageConstraints(R, $.locator), s($), w = V.a.create(R, K.dom.image), A($.numOfWorkers, function () {
        0 === $.numOfWorkers && o(), c(t);
      });
    }

    function c(t) {
      R.play(), t();
    }

    function s() {
      if ("undefined" != typeof document) {
        var t = a();

        if (K.dom.image = document.querySelector("canvas.imgBuffer"), K.dom.image || (K.dom.image = document.createElement("canvas"), K.dom.image.className = "imgBuffer", t && "ImageStream" === $.inputStream.type && t.appendChild(K.dom.image)), K.ctx.image = K.dom.image.getContext("2d"), K.dom.image.width = R.getCanvasSize().x, K.dom.image.height = R.getCanvasSize().y, K.dom.overlay = document.querySelector("canvas.drawingBuffer"), !K.dom.overlay) {
          K.dom.overlay = document.createElement("canvas"), K.dom.overlay.className = "drawingBuffer", t && t.appendChild(K.dom.overlay);
          var e = document.createElement("br");
          e.setAttribute("clear", "all"), t && t.appendChild(e);
        }

        K.ctx.overlay = K.dom.overlay.getContext("2d"), K.dom.overlay.width = R.getCanvasSize().x, K.dom.overlay.height = R.getCanvasSize().y;
      }
    }

    function f(t) {
      S = t ? t : new j.a({
        x: R.getWidth(),
        y: R.getHeight()
      }), D = [q.clone([0, 0]), q.clone([0, S.size.y]), q.clone([S.size.x, S.size.y]), q.clone([S.size.x, 0])], U.a.init(S, $.locator);
    }

    function l() {
      return $.locate ? U.a.locate() : [[q.clone(D[0]), q.clone(D[1]), q.clone(D[2]), q.clone(D[3])]];
    }

    function d(t) {
      function e(t) {
        for (var e = t.length; e--;) {
          t[e][0] += i, t[e][1] += a;
        }
      }

      function n(t) {
        t[0].x += i, t[0].y += a, t[1].x += i, t[1].y += a;
      }

      var r,
          o = R.getTopRight(),
          i = o.x,
          a = o.y;

      if (0 !== i || 0 !== a) {
        if (t.barcodes) for (r = 0; r < t.barcodes.length; r++) {
          d(t.barcodes[r]);
        }
        if (t.line && 2 === t.line.length && n(t.line), t.box && e(t.box), t.boxes && t.boxes.length > 0) for (r = 0; r < t.boxes.length; r++) {
          e(t.boxes[r]);
        }
      }
    }

    function h(t, e) {
      e && I && (t.barcodes ? t.barcodes.filter(function (t) {
        return t.codeResult;
      }).forEach(function (t) {
        return h(t, e);
      }) : t.codeResult && I.addResult(e, R.getCanvasSize(), t.codeResult));
    }

    function p(t) {
      return t && (t.barcodes ? t.barcodes.some(function (t) {
        return t.codeResult;
      }) : t.codeResult);
    }

    function v(t, e) {
      var n = t;
      t && Q && (d(t), h(t, e), n = t.barcodes || t), L.a.publish("processed", n), p(t) && L.a.publish("detected", n);
    }

    function _() {
      var t, e;
      e = l(), e ? (t = P.decodeFromBoundingBoxes(e), t = t || {}, t.boxes = e, v(t, S.data)) : v();
    }

    function g() {
      var t;

      if (Q) {
        if (Y.length > 0) {
          if (!(t = Y.filter(function (t) {
            return !t.busy;
          })[0])) return;
          w.attachData(t.imageData);
        } else w.attachData(S.data);

        w.grab() && (t ? (t.busy = !0, t.worker.postMessage({
          cmd: "process",
          imageData: t.imageData
        }, [t.imageData.buffer])) : _());
      } else _();
    }

    function y() {
      var t = null,
          e = 1e3 / ($.frequency || 60);
      T = !1, function n(r) {
        t = t || r, T || (r >= t && (t += e, g()), window.requestAnimFrame(n));
      }(performance.now());
    }

    function m() {
      Q && "LiveStream" === $.inputStream.type ? y() : g();
    }

    function x(t) {
      var e,
          n = {
        worker: void 0,
        imageData: new Uint8Array(R.getWidth() * R.getHeight()),
        busy: !0
      };
      e = C(), n.worker = new Worker(e), n.worker.onmessage = function (r) {
        if ("initialized" === r.data.event) return URL.revokeObjectURL(e), n.busy = !1, n.imageData = new Uint8Array(r.data.imageData), t(n);
        "processed" === r.data.event ? (n.imageData = new Uint8Array(r.data.imageData), n.busy = !1, v(r.data.result, n.imageData)) : r.data.event;
      }, n.worker.postMessage({
        cmd: "init",
        size: {
          x: R.getWidth(),
          y: R.getHeight()
        },
        imageData: n.imageData,
        config: b($)
      }, [n.imageData.buffer]);
    }

    function b(t) {
      return X({}, t, {
        inputStream: X({}, t.inputStream, {
          target: null
        })
      });
    }

    function E(t) {
      function e(t) {
        self.postMessage({
          event: "processed",
          imageData: o.data,
          result: t
        }, [o.data.buffer]);
      }

      function n() {
        self.postMessage({
          event: "initialized",
          imageData: o.data
        }, [o.data.buffer]);
      }

      if (t) {
        var r = t().default;
        if (!r) return void self.postMessage({
          event: "error",
          message: "Quagga could not be created"
        });
      }

      var o;

      self.onmessage = function (t) {
        if ("init" === t.data.cmd) {
          var i = t.data.config;
          i.numOfWorkers = 0, o = new r.ImageWrapper({
            x: t.data.size.x,
            y: t.data.size.y
          }, new Uint8Array(t.data.imageData)), r.init(i, n, o), r.onProcessed(e);
        } else "process" === t.data.cmd ? (o.data = new Uint8Array(t.data.imageData), r.start()) : "setReaders" === t.data.cmd && r.setReaders(t.data.readers);
      };
    }

    function C() {
      var e, n;
      return void 0 !== t && (n = t), e = new Blob(["(" + E.toString() + ")(" + n + ");"], {
        type: "text/javascript"
      }), window.URL.createObjectURL(e);
    }

    function O(t) {
      P ? P.setReaders(t) : Q && Y.length > 0 && Y.forEach(function (e) {
        e.worker.postMessage({
          cmd: "setReaders",
          readers: t
        });
      });
    }

    function A(t, e) {
      var n = t - Y.length;
      if (0 === n) return e && e();

      if (n < 0) {
        return Y.slice(n).forEach(function (t) {
          t.worker.terminate();
        }), Y = Y.slice(0, n), e && e();
      }

      for (var r = function r(n) {
        Y.push(n), Y.length >= t && e && e();
      }, o = 0; o < n; o++) {
        x(r);
      }
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    });

    var R,
        w,
        T,
        S,
        D,
        P,
        I,
        M = r(28),
        N = r.n(M),
        z = r(54),
        j = (r.n(z), r(20)),
        U = r(64),
        k = r(57),
        L = r(51),
        F = r(59),
        W = r(9),
        B = r(49),
        G = r(55),
        H = r(63),
        V = r(61),
        X = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
      }

      return t;
    },
        q = {
      clone: r(7)
    },
        K = {
      ctx: {
        image: null,
        overlay: null
      },
      dom: {
        image: null,
        overlay: null
      }
    },
        Y = [],
        Q = !0,
        $ = {};

    n.default = {
      init: function init(t, e, n) {
        if ($ = N()({}, G.a, t), n) return Q = !1, o(n), e();
        i(e);
      },
      start: function start() {
        m();
      },
      stop: function stop() {
        T = !0, A(0), "LiveStream" === $.inputStream.type && (F.a.release(), R.clearEventHandlers());
      },
      pause: function pause() {
        T = !0;
      },
      onDetected: function onDetected(t) {
        L.a.subscribe("detected", t);
      },
      offDetected: function offDetected(t) {
        L.a.unsubscribe("detected", t);
      },
      onProcessed: function onProcessed(t) {
        L.a.subscribe("processed", t);
      },
      offProcessed: function offProcessed(t) {
        L.a.unsubscribe("processed", t);
      },
      setReaders: function setReaders(t) {
        O(t);
      },
      registerResultCollector: function registerResultCollector(t) {
        t && "function" == typeof t.addResult && (I = t);
      },
      canvas: K,
      decodeSingle: function decodeSingle(t, e) {
        var n = this;
        t = N()({
          inputStream: {
            type: "ImageStream",
            sequence: !1,
            size: 800,
            src: t.src
          },
          numOfWorkers: 1,
          locator: {
            halfSample: !1
          }
        }, t), this.init(t, function () {
          L.a.once("processed", function (t) {
            n.stop(), e.call(null, t);
          }, !0), m();
        });
      },
      ImageWrapper: j.a,
      ImageDebug: W.a,
      ResultCollector: B.a,
      CameraAccess: F.a
    };
  }, function (t, e, n) {
    "use strict";

    function r(t, e) {
      return !!e && e.some(function (e) {
        return Object.keys(e).every(function (n) {
          return e[n] === t[n];
        });
      });
    }

    function o(t, e) {
      return "function" != typeof e || e(t);
    }

    var i = n(9);
    e.a = {
      create: function create(t) {
        function e(e) {
          return c && e && !r(e, t.blacklist) && o(e, t.filter);
        }

        var n = document.createElement("canvas"),
            a = n.getContext("2d"),
            u = [],
            c = t.capacity || 20,
            s = t.capture === !0;
        return {
          addResult: function addResult(t, r, o) {
            var f = {};
            e(o) && (c--, f.codeResult = o, s && (n.width = r.x, n.height = r.y, i.a.drawImage(t, r, a), f.frame = n.toDataURL()), u.push(f));
          },
          getResults: function getResults() {
            return u;
          }
        };
      }
    };
  }, function (t, e, n) {
    "use strict";

    var r = {
      clone: n(7),
      dot: n(32)
    };
    e.a = {
      create: function create(t, e) {
        function n() {
          o(t), i();
        }

        function o(t) {
          c[t.id] = t, a.push(t);
        }

        function i() {
          var t,
              e = 0;

          for (t = 0; t < a.length; t++) {
            e += a[t].rad;
          }

          u.rad = e / a.length, u.vec = r.clone([Math.cos(u.rad), Math.sin(u.rad)]);
        }

        var a = [],
            u = {
          rad: 0,
          vec: r.clone([0, 0])
        },
            c = {};
        return n(), {
          add: function add(t) {
            c[t.id] || (o(t), i());
          },
          fits: function fits(t) {
            return Math.abs(r.dot(t.point.vec, u.vec)) > e;
          },
          getPoints: function getPoints() {
            return a;
          },
          getCenter: function getCenter() {
            return u;
          }
        };
      },
      createPoint: function createPoint(t, e, n) {
        return {
          rad: t[n],
          point: t,
          id: e
        };
      }
    };
  }, function (t, e, n) {
    "use strict";

    e.a = function () {
      function t(t) {
        return o[t] || (o[t] = {
          subscribers: []
        }), o[t];
      }

      function e() {
        o = {};
      }

      function n(t, e) {
        t.async ? setTimeout(function () {
          t.callback(e);
        }, 4) : t.callback(e);
      }

      function r(e, n, r) {
        var o;
        if ("function" == typeof n) o = {
          callback: n,
          async: r
        };else if (o = n, !o.callback) throw "Callback was not specified on options";
        t(e).subscribers.push(o);
      }

      var o = {};
      return {
        subscribe: function subscribe(t, e, n) {
          return r(t, e, n);
        },
        publish: function publish(e, r) {
          var o = t(e),
              i = o.subscribers;
          i.filter(function (t) {
            return !!t.once;
          }).forEach(function (t) {
            n(t, r);
          }), o.subscribers = i.filter(function (t) {
            return !t.once;
          }), o.subscribers.forEach(function (t) {
            n(t, r);
          });
        },
        once: function once(t, e, n) {
          r(t, {
            callback: e,
            async: n,
            once: !0
          });
        },
        unsubscribe: function unsubscribe(n, r) {
          var o;
          n ? (o = t(n), o.subscribers = o && r ? o.subscribers.filter(function (t) {
            return t.callback !== r;
          }) : []) : e();
        }
      };
    }();
  }, function (t, e, n) {
    "use strict";

    function r() {
      return navigator.mediaDevices && "function" == typeof navigator.mediaDevices.enumerateDevices ? navigator.mediaDevices.enumerateDevices() : Promise.reject(new Error("enumerateDevices is not defined"));
    }

    function o(t) {
      return navigator.mediaDevices && "function" == typeof navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia(t) : Promise.reject(new Error("getUserMedia is not defined"));
    }

    e.b = r, e.a = o;
  }, function (t, e, n) {
    "use strict";

    function r(t, e, n) {
      n || (n = {
        data: null,
        size: e
      }), this.data = n.data, this.originalSize = n.size, this.I = n, this.from = t, this.size = e;
    }

    r.prototype.show = function (t, e) {
      var n, r, o, i, a, u, c;

      for (e || (e = 1), n = t.getContext("2d"), t.width = this.size.x, t.height = this.size.y, r = n.getImageData(0, 0, t.width, t.height), o = r.data, i = 0, a = 0; a < this.size.y; a++) {
        for (u = 0; u < this.size.x; u++) {
          c = a * this.size.x + u, i = this.get(u, a) * e, o[4 * c + 0] = i, o[4 * c + 1] = i, o[4 * c + 2] = i, o[4 * c + 3] = 255;
        }
      }

      r.data = o, n.putImageData(r, 0, 0);
    }, r.prototype.get = function (t, e) {
      return this.data[(this.from.y + e) * this.originalSize.x + this.from.x + t];
    }, r.prototype.updateData = function (t) {
      this.originalSize = t.size, this.data = t.data;
    }, r.prototype.updateFrom = function (t) {
      return this.from = t, this;
    }, e.a = r;
  }, function (t, e) {
    "undefined" != typeof window && (window.requestAnimFrame = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
        window.setTimeout(t, 1e3 / 60);
      };
    }()), Math.imul = Math.imul || function (t, e) {
      var n = t >>> 16 & 65535,
          r = 65535 & t,
          o = e >>> 16 & 65535,
          i = 65535 & e;
      return r * i + (n * i + r * o << 16 >>> 0) | 0;
    }, "function" != typeof Object.assign && (Object.assign = function (t) {
      "use strict";

      if (null === t) throw new TypeError("Cannot convert undefined or null to object");

      for (var e = Object(t), n = 1; n < arguments.length; n++) {
        var r = arguments[n];
        if (null !== r) for (var o in r) {
          Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
        }
      }

      return e;
    });
  }, function (t, e, n) {
    "use strict";

    var r = void 0;
    r = n(56), e.a = r;
  }, function (t, e) {
    t.exports = {
      inputStream: {
        name: "Live",
        type: "LiveStream",
        constraints: {
          width: 640,
          height: 480,
          facingMode: "environment"
        },
        area: {
          top: "0%",
          right: "0%",
          left: "0%",
          bottom: "0%"
        },
        singleChannel: !1
      },
      locate: !0,
      numOfWorkers: 4,
      decoder: {
        readers: ["code_128_reader"]
      },
      locator: {
        halfSample: !0,
        patchSize: "medium"
      }
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(58),
        o = (n(9), n(69)),
        i = n(4),
        a = n(31),
        u = n(70),
        c = n(68),
        s = n(77),
        f = n(74),
        l = n(72),
        d = n(73),
        h = n(76),
        p = n(75),
        v = n(67),
        _ = n(71),
        g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    },
        y = {
      code_128_reader: o.a,
      ean_reader: i.a,
      ean_5_reader: d.a,
      ean_2_reader: l.a,
      ean_8_reader: f.a,
      code_39_reader: a.a,
      code_39_vin_reader: u.a,
      codabar_reader: c.a,
      upc_reader: s.a,
      upc_e_reader: h.a,
      i2of5_reader: p.a,
      "2of5_reader": v.a,
      code_93_reader: _.a
    };

    e.a = {
      create: function create(t, e) {
        function n() {}

        function o() {
          t.readers.forEach(function (t) {
            var e,
                n = {},
                r = [];
            "object" === (void 0 === t ? "undefined" : g(t)) ? (e = t.format, n = t.config) : "string" == typeof t && (e = t), n.supplements && (r = n.supplements.map(function (t) {
              return new y[t]();
            })), h.push(new y[e](n, r));
          });
        }

        function i() {}

        function a(t, n, r) {
          function o(e) {
            var r = {
              y: e * Math.sin(n),
              x: e * Math.cos(n)
            };
            t[0].y -= r.y, t[0].x -= r.x, t[1].y += r.y, t[1].x += r.x;
          }

          for (o(r); r > 1 && (!e.inImageWithBorder(t[0], 0) || !e.inImageWithBorder(t[1], 0));) {
            r -= Math.ceil(r / 2), o(-r);
          }

          return t;
        }

        function u(t) {
          return [{
            x: (t[1][0] - t[0][0]) / 2 + t[0][0],
            y: (t[1][1] - t[0][1]) / 2 + t[0][1]
          }, {
            x: (t[3][0] - t[2][0]) / 2 + t[2][0],
            y: (t[3][1] - t[2][1]) / 2 + t[2][1]
          }];
        }

        function c(t) {
          var n,
              o = null,
              i = r.a.getBarcodeLine(e, t[0], t[1]);

          for (r.a.toBinaryLine(i), n = 0; n < h.length && null === o; n++) {
            o = h[n].decodePattern(i.line);
          }

          return null === o ? null : {
            codeResult: o,
            barcodeLine: i
          };
        }

        function s(t, e, n) {
          var r,
              o,
              i,
              a = Math.sqrt(Math.pow(t[1][0] - t[0][0], 2) + Math.pow(t[1][1] - t[0][1], 2)),
              u = 16,
              s = null,
              f = Math.sin(n),
              l = Math.cos(n);

          for (r = 1; r < u && null === s; r++) {
            o = a / u * r * (r % 2 == 0 ? -1 : 1), i = {
              y: o * f,
              x: o * l
            }, e[0].y += i.x, e[0].x -= i.y, e[1].y += i.x, e[1].x -= i.y, s = c(e);
          }

          return s;
        }

        function f(t) {
          return Math.sqrt(Math.pow(Math.abs(t[1].y - t[0].y), 2) + Math.pow(Math.abs(t[1].x - t[0].x), 2));
        }

        function l(t) {
          var e, n, r, o;
          d.ctx.overlay;
          return e = u(t), o = f(e), n = Math.atan2(e[1].y - e[0].y, e[1].x - e[0].x), null === (e = a(e, n, Math.floor(.1 * o))) ? null : (r = c(e), null === r && (r = s(t, e, n)), null === r ? null : {
            codeResult: r.codeResult,
            line: e,
            angle: n,
            pattern: r.barcodeLine.line,
            threshold: r.barcodeLine.threshold
          });
        }

        var d = {
          ctx: {
            frequency: null,
            pattern: null,
            overlay: null
          },
          dom: {
            frequency: null,
            pattern: null,
            overlay: null
          }
        },
            h = [];
        return n(), o(), i(), {
          decodeFromBoundingBox: function decodeFromBoundingBox(t) {
            return l(t);
          },
          decodeFromBoundingBoxes: function decodeFromBoundingBoxes(e) {
            var n,
                r,
                o = [],
                i = t.multiple;

            for (n = 0; n < e.length; n++) {
              var a = e[n];
              if (r = l(a) || {}, r.box = a, i) o.push(r);else if (r.codeResult) return r;
            }

            if (i) return {
              barcodes: o
            };
          },
          setReaders: function setReaders(e) {
            t.readers = e, h.length = 0, o();
          }
        };
      }
    };
  }, function (t, e, n) {
    "use strict";

    var r = (n(20), {}),
        o = {
      DIR: {
        UP: 1,
        DOWN: -1
      }
    };
    r.getBarcodeLine = function (t, e, n) {
      function r(t, e) {
        l = y[e * m + t], x += l, b = l < b ? l : b, E = l > E ? l : E, g.push(l);
      }

      var o,
          i,
          a,
          u,
          c,
          s,
          f,
          l,
          d = 0 | e.x,
          h = 0 | e.y,
          p = 0 | n.x,
          v = 0 | n.y,
          _ = Math.abs(v - h) > Math.abs(p - d),
          g = [],
          y = t.data,
          m = t.size.x,
          x = 0,
          b = 255,
          E = 0;

      for (_ && (s = d, d = h, h = s, s = p, p = v, v = s), d > p && (s = d, d = p, p = s, s = h, h = v, v = s), o = p - d, i = Math.abs(v - h), a = o / 2 | 0, c = h, u = h < v ? 1 : -1, f = d; f < p; f++) {
        _ ? r(c, f) : r(f, c), (a -= i) < 0 && (c += u, a += o);
      }

      return {
        line: g,
        min: b,
        max: E
      };
    }, r.toBinaryLine = function (t) {
      var e,
          n,
          r,
          i,
          a,
          u,
          c = t.min,
          s = t.max,
          f = t.line,
          l = c + (s - c) / 2,
          d = [],
          h = (s - c) / 12,
          p = -h;

      for (r = f[0] > l ? o.DIR.UP : o.DIR.DOWN, d.push({
        pos: 0,
        val: f[0]
      }), a = 0; a < f.length - 2; a++) {
        e = f[a + 1] - f[a], n = f[a + 2] - f[a + 1], i = e + n < p && f[a + 1] < 1.5 * l ? o.DIR.DOWN : e + n > h && f[a + 1] > .5 * l ? o.DIR.UP : r, r !== i && (d.push({
          pos: a,
          val: f[a]
        }), r = i);
      }

      for (d.push({
        pos: f.length,
        val: f[f.length - 1]
      }), u = d[0].pos; u < d[1].pos; u++) {
        f[u] = f[u] > l ? 0 : 1;
      }

      for (a = 1; a < d.length - 1; a++) {
        for (h = d[a + 1].val > d[a].val ? d[a].val + (d[a + 1].val - d[a].val) / 3 * 2 | 0 : d[a + 1].val + (d[a].val - d[a + 1].val) / 3 | 0, u = d[a].pos; u < d[a + 1].pos; u++) {
          f[u] = f[u] > h ? 0 : 1;
        }
      }

      return {
        line: f,
        threshold: h
      };
    }, r.debug = {
      printFrequency: function printFrequency(t, e) {
        var n,
            r = e.getContext("2d");

        for (e.width = t.length, e.height = 256, r.beginPath(), r.strokeStyle = "blue", n = 0; n < t.length; n++) {
          r.moveTo(n, 255), r.lineTo(n, 255 - t[n]);
        }

        r.stroke(), r.closePath();
      },
      printPattern: function printPattern(t, e) {
        var n,
            r = e.getContext("2d");

        for (e.width = t.length, r.fillColor = "black", n = 0; n < t.length; n++) {
          1 === t[n] && r.fillRect(n, 0, 1, 100);
        }
      }
    }, e.a = r;
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      return new Promise(function (e, n) {
        function r() {
          o > 0 ? t.videoWidth > 10 && t.videoHeight > 10 ? e() : window.setTimeout(r, 500) : n("Unable to play video stream. Is webcam working?"), o--;
        }

        var o = 10;
        r();
      });
    }

    function o(t, e) {
      return n.i(d.a)(e).then(function (e) {
        return new Promise(function (n) {
          s = e, t.setAttribute("autoplay", !0), t.setAttribute("muted", !0), t.setAttribute("playsinline", !0), t.srcObject = e, t.addEventListener("loadedmetadata", function () {
            t.play(), n();
          });
        });
      }).then(r.bind(null, t));
    }

    function i(t) {
      var e = l()(t, ["width", "height", "facingMode", "aspectRatio", "deviceId"]);
      return void 0 !== t.minAspectRatio && t.minAspectRatio > 0 && (e.aspectRatio = t.minAspectRatio, console.log("WARNING: Constraint 'minAspectRatio' is deprecated; Use 'aspectRatio' instead")), void 0 !== t.facing && (e.facingMode = t.facing, console.log("WARNING: Constraint 'facing' is deprecated. Use 'facingMode' instead'")), e;
    }

    function a(t) {
      var e = {
        audio: !1,
        video: i(t)
      };
      return e.video.deviceId && e.video.facingMode && delete e.video.facingMode, Promise.resolve(e);
    }

    function u() {
      return n.i(d.b)().then(function (t) {
        return t.filter(function (t) {
          return "videoinput" === t.kind;
        });
      });
    }

    function c() {
      if (s) {
        var t = s.getVideoTracks();
        if (t && t.length) return t[0];
      }
    }

    var s,
        f = n(162),
        l = n.n(f),
        d = n(52);
    e.a = {
      request: function request(t, e) {
        return a(e).then(o.bind(null, t));
      },
      release: function release() {
        var t = s && s.getVideoTracks();
        t && t.length && t[0].stop(), s = null;
      },
      enumerateVideoDevices: u,
      getActiveStreamLabel: function getActiveStreamLabel() {
        var t = c();
        return t ? t.label : "";
      },
      getActiveTrack: c
    };
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d;
      return /^blob\:/i.test(t) ? i(t).then(o).then(function (t) {
        return a(t, e);
      }) : Promise.resolve(null);
    }

    function o(t) {
      return new Promise(function (e) {
        var n = new FileReader();
        n.onload = function (t) {
          return e(t.target.result);
        }, n.readAsArrayBuffer(t);
      });
    }

    function i(t) {
      return new Promise(function (e, n) {
        var r = new XMLHttpRequest();
        r.open("GET", t, !0), r.responseType = "blob", r.onreadystatechange = function () {
          r.readyState !== XMLHttpRequest.DONE || 200 !== r.status && 0 !== r.status || e(this.response);
        }, r.onerror = n, r.send();
      });
    }

    function a(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d,
          n = new DataView(t),
          r = t.byteLength,
          o = e.reduce(function (t, e) {
        var n = Object.keys(l).filter(function (t) {
          return l[t] === e;
        })[0];
        return n && (t[n] = e), t;
      }, {}),
          i = 2;
      if (255 !== n.getUint8(0) || 216 !== n.getUint8(1)) return !1;

      for (; i < r;) {
        if (255 !== n.getUint8(i)) return !1;
        if (225 === n.getUint8(i + 1)) return u(n, i + 4, o);
        i += 2 + n.getUint16(i + 2);
      }
    }

    function u(t, e, n) {
      if ("Exif" !== f(t, e, 4)) return !1;
      var r = e + 6,
          o = void 0;
      if (18761 === t.getUint16(r)) o = !1;else {
        if (19789 !== t.getUint16(r)) return !1;
        o = !0;
      }
      if (42 !== t.getUint16(r + 2, !o)) return !1;
      var i = t.getUint32(r + 4, !o);
      return !(i < 8) && c(t, r, r + i, n, o);
    }

    function c(t, e, n, r, o) {
      for (var i = t.getUint16(n, !o), a = {}, u = 0; u < i; u++) {
        var c = n + 12 * u + 2,
            f = r[t.getUint16(c, !o)];
        f && (a[f] = s(t, c, e, n, o));
      }

      return a;
    }

    function s(t, e, n, r, o) {
      var i = t.getUint16(e + 2, !o),
          a = t.getUint32(e + 4, !o);

      switch (i) {
        case 3:
          if (1 === a) return t.getUint16(e + 8, !o);
      }
    }

    function f(t, e, n) {
      for (var r = "", o = e; o < e + n; o++) {
        r += String.fromCharCode(t.getUint8(o));
      }

      return r;
    }

    e.a = r;
    var l = {
      274: "orientation"
    },
        d = Object.keys(l).map(function (t) {
      return l[t];
    });
  }, function (t, e, n) {
    "use strict";

    function r(t, e) {
      t.width !== e.x && (t.width = e.x), t.height !== e.y && (t.height = e.y);
    }

    var o = n(19),
        i = Math.PI / 180,
        a = {};
    a.create = function (t, e) {
      var a,
          u = {},
          c = t.getConfig(),
          s = (n.i(o.b)(t.getRealWidth(), t.getRealHeight()), t.getCanvasSize()),
          f = n.i(o.b)(t.getWidth(), t.getHeight()),
          l = t.getTopRight(),
          d = l.x,
          h = l.y,
          p = null,
          v = null;
      return a = e ? e : document.createElement("canvas"), a.width = s.x, a.height = s.y, p = a.getContext("2d"), v = new Uint8Array(f.x * f.y), u.attachData = function (t) {
        v = t;
      }, u.getData = function () {
        return v;
      }, u.grab = function () {
        var e,
            u = c.halfSample,
            l = t.getFrame(),
            _ = l,
            g = 0;

        if (_) {
          if (r(a, s), "ImageStream" === c.type && (_ = l.img, l.tags && l.tags.orientation)) switch (l.tags.orientation) {
            case 6:
              g = 90 * i;
              break;

            case 8:
              g = -90 * i;
          }
          return 0 !== g ? (p.translate(s.x / 2, s.y / 2), p.rotate(g), p.drawImage(_, -s.y / 2, -s.x / 2, s.y, s.x), p.rotate(-g), p.translate(-s.x / 2, -s.y / 2)) : p.drawImage(_, 0, 0, s.x, s.y), e = p.getImageData(d, h, f.x, f.y).data, u ? n.i(o.c)(e, f, v) : n.i(o.d)(e, v, c), !0;
        }

        return !1;
      }, u.getSize = function () {
        return f;
      }, u;
    }, e.a = a;
  }, function (t, e, n) {
    "use strict";

    function r(t, e) {
      t.onload = function () {
        e.loaded(this);
      };
    }

    var o = n(60),
        i = {};
    i.load = function (t, e, i, a, u) {
      var c,
          s,
          f,
          l = new Array(a),
          d = new Array(l.length);
      if (u === !1) l[0] = t;else for (c = 0; c < l.length; c++) {
        f = i + c, l[c] = t + "image-" + ("00" + f).slice(-3) + ".jpg";
      }

      for (d.notLoaded = [], d.addImage = function (t) {
        d.notLoaded.push(t);
      }, d.loaded = function (r) {
        for (var i = d.notLoaded, a = 0; a < i.length; a++) {
          if (i[a] === r) {
            i.splice(a, 1);

            for (var c = 0; c < l.length; c++) {
              var s = l[c].substr(l[c].lastIndexOf("/"));

              if (r.src.lastIndexOf(s) !== -1) {
                d[c] = {
                  img: r
                };
                break;
              }
            }

            break;
          }
        }

        0 === i.length && (u === !1 ? n.i(o.a)(t, ["orientation"]).then(function (t) {
          d[0].tags = t, e(d);
        }).catch(function (t) {
          console.log(t), e(d);
        }) : e(d));
      }, c = 0; c < l.length; c++) {
        s = new Image(), d.addImage(s), r(s, d), s.src = l[c];
      }
    }, e.a = i;
  }, function (t, e, n) {
    "use strict";

    var r = n(62),
        o = {};
    o.createVideoStream = function (t) {
      function e() {
        var e = t.videoWidth,
            o = t.videoHeight;
        n = i.size ? e / o > 1 ? i.size : Math.floor(e / o * i.size) : e, r = i.size ? e / o > 1 ? Math.floor(o / e * i.size) : i.size : o, s.x = n, s.y = r;
      }

      var n,
          r,
          o = {},
          i = null,
          a = ["canrecord", "ended"],
          u = {},
          c = {
        x: 0,
        y: 0
      },
          s = {
        x: 0,
        y: 0
      };
      return o.getRealWidth = function () {
        return t.videoWidth;
      }, o.getRealHeight = function () {
        return t.videoHeight;
      }, o.getWidth = function () {
        return n;
      }, o.getHeight = function () {
        return r;
      }, o.setWidth = function (t) {
        n = t;
      }, o.setHeight = function (t) {
        r = t;
      }, o.setInputStream = function (e) {
        i = e, t.src = void 0 !== e.src ? e.src : "";
      }, o.ended = function () {
        return t.ended;
      }, o.getConfig = function () {
        return i;
      }, o.setAttribute = function (e, n) {
        t.setAttribute(e, n);
      }, o.pause = function () {
        t.pause();
      }, o.play = function () {
        t.play();
      }, o.setCurrentTime = function (e) {
        "LiveStream" !== i.type && (t.currentTime = e);
      }, o.addEventListener = function (e, n, r) {
        a.indexOf(e) !== -1 ? (u[e] || (u[e] = []), u[e].push(n)) : t.addEventListener(e, n, r);
      }, o.clearEventHandlers = function () {
        a.forEach(function (e) {
          var n = u[e];
          n && n.length > 0 && n.forEach(function (n) {
            t.removeEventListener(e, n);
          });
        });
      }, o.trigger = function (t, n) {
        var r,
            i = u[t];
        if ("canrecord" === t && e(), i && i.length > 0) for (r = 0; r < i.length; r++) {
          i[r].apply(o, n);
        }
      }, o.setTopRight = function (t) {
        c.x = t.x, c.y = t.y;
      }, o.getTopRight = function () {
        return c;
      }, o.setCanvasSize = function (t) {
        s.x = t.x, s.y = t.y;
      }, o.getCanvasSize = function () {
        return s;
      }, o.getFrame = function () {
        return t;
      }, o;
    }, o.createLiveStream = function (t) {
      t.setAttribute("autoplay", !0);
      var e = o.createVideoStream(t);
      return e.ended = function () {
        return !1;
      }, e;
    }, o.createImageStream = function () {
      function t() {
        l = !1, r.a.load(v, function (t) {
          if (d = t, t[0].tags && t[0].tags.orientation) switch (t[0].tags.orientation) {
            case 6:
            case 8:
              u = t[0].img.height, c = t[0].img.width;
              break;

            default:
              u = t[0].img.width, c = t[0].img.height;
          } else u = t[0].img.width, c = t[0].img.height;
          n = a.size ? u / c > 1 ? a.size : Math.floor(u / c * a.size) : u, o = a.size ? u / c > 1 ? Math.floor(c / u * a.size) : a.size : c, x.x = n, x.y = o, l = !0, s = 0, setTimeout(function () {
            e("canrecord", []);
          }, 0);
        }, p, h, a.sequence);
      }

      function e(t, e) {
        var n,
            r = y[t];
        if (r && r.length > 0) for (n = 0; n < r.length; n++) {
          r[n].apply(i, e);
        }
      }

      var n,
          o,
          i = {},
          a = null,
          u = 0,
          c = 0,
          s = 0,
          f = !0,
          l = !1,
          d = null,
          h = 0,
          p = 1,
          v = null,
          _ = !1,
          g = ["canrecord", "ended"],
          y = {},
          m = {
        x: 0,
        y: 0
      },
          x = {
        x: 0,
        y: 0
      };

      return i.trigger = e, i.getWidth = function () {
        return n;
      }, i.getHeight = function () {
        return o;
      }, i.setWidth = function (t) {
        n = t;
      }, i.setHeight = function (t) {
        o = t;
      }, i.getRealWidth = function () {
        return u;
      }, i.getRealHeight = function () {
        return c;
      }, i.setInputStream = function (e) {
        a = e, e.sequence === !1 ? (v = e.src, h = 1) : (v = e.src, h = e.length), t();
      }, i.ended = function () {
        return _;
      }, i.setAttribute = function () {}, i.getConfig = function () {
        return a;
      }, i.pause = function () {
        f = !0;
      }, i.play = function () {
        f = !1;
      }, i.setCurrentTime = function (t) {
        s = t;
      }, i.addEventListener = function (t, e) {
        g.indexOf(t) !== -1 && (y[t] || (y[t] = []), y[t].push(e));
      }, i.setTopRight = function (t) {
        m.x = t.x, m.y = t.y;
      }, i.getTopRight = function () {
        return m;
      }, i.setCanvasSize = function (t) {
        x.x = t.x, x.y = t.y;
      }, i.getCanvasSize = function () {
        return x;
      }, i.getFrame = function () {
        var t;
        return l ? (f || (t = d[s], s < h - 1 ? s++ : setTimeout(function () {
          _ = !0, e("ended", []);
        }, 0)), t) : null;
      }, i;
    }, e.a = o;
  }, function (t, e, n) {
    "use strict";

    (function (t) {
      function r() {
        var e;
        v = p.halfSample ? new R.a({
          x: O.size.x / 2 | 0,
          y: O.size.y / 2 | 0
        }) : O, C = n.i(w.e)(p.patchSize, v.size), z.x = v.size.x / C.x | 0, z.y = v.size.y / C.y | 0, E = new R.a(v.size, void 0, Uint8Array, !1), y = new R.a(C, void 0, Array, !0), e = new ArrayBuffer(65536), g = new R.a(C, new Uint8Array(e, 0, C.x * C.y)), _ = new R.a(C, new Uint8Array(e, C.x * C.y * 3, C.x * C.y), void 0, !0), A = n.i(P.a)("undefined" != typeof window ? window : "undefined" != typeof self ? self : t, {
          size: C.x
        }, e), b = new R.a({
          x: v.size.x / g.size.x | 0,
          y: v.size.y / g.size.y | 0
        }, void 0, Array, !0), m = new R.a(b.size, void 0, void 0, !0), x = new R.a(b.size, void 0, Int32Array, !0);
      }

      function o() {
        p.useWorker || "undefined" == typeof document || (N.dom.binary = document.createElement("canvas"), N.dom.binary.className = "binaryBuffer", N.ctx.binary = N.dom.binary.getContext("2d"), N.dom.binary.width = E.size.x, N.dom.binary.height = E.size.y);
      }

      function i(t) {
        var e,
            n,
            r,
            o,
            i,
            a,
            u,
            c = E.size.x,
            s = E.size.y,
            f = -E.size.x,
            l = -E.size.y;

        for (e = 0, n = 0; n < t.length; n++) {
          o = t[n], e += o.rad;
        }

        for (e /= t.length, e = (180 * e / Math.PI + 90) % 180 - 90, e < 0 && (e += 180), e = (180 - e) * Math.PI / 180, i = M.copy(M.create(), [Math.cos(e), Math.sin(e), -Math.sin(e), Math.cos(e)]), n = 0; n < t.length; n++) {
          for (o = t[n], r = 0; r < 4; r++) {
            I.transformMat2(o.box[r], o.box[r], i);
          }
        }

        for (n = 0; n < t.length; n++) {
          for (o = t[n], r = 0; r < 4; r++) {
            o.box[r][0] < c && (c = o.box[r][0]), o.box[r][0] > f && (f = o.box[r][0]), o.box[r][1] < s && (s = o.box[r][1]), o.box[r][1] > l && (l = o.box[r][1]);
          }
        }

        for (a = [[c, s], [f, s], [f, l], [c, l]], u = p.halfSample ? 2 : 1, i = M.invert(i, i), r = 0; r < 4; r++) {
          I.transformMat2(a[r], a[r], i);
        }

        for (r = 0; r < 4; r++) {
          I.scale(a[r], a[r], u);
        }

        return a;
      }

      function a() {
        n.i(w.f)(v, E), E.zeroBorder();
      }

      function u() {
        var t,
            e,
            n,
            r,
            o,
            i,
            a,
            u = [];

        for (t = 0; t < z.x; t++) {
          for (e = 0; e < z.y; e++) {
            n = g.size.x * t, r = g.size.y * e, l(n, r), _.zeroBorder(), T.a.init(y.data, 0), i = S.a.create(_, y), a = i.rasterize(0), o = y.moments(a.count), u = u.concat(d(o, [t, e], n, r));
          }
        }

        return u;
      }

      function c(t) {
        var e,
            n,
            r = [];

        for (e = 0; e < t; e++) {
          r.push(0);
        }

        for (n = x.data.length; n--;) {
          x.data[n] > 0 && r[x.data[n] - 1]++;
        }

        return r = r.map(function (t, e) {
          return {
            val: t,
            label: e + 1
          };
        }), r.sort(function (t, e) {
          return e.val - t.val;
        }), r.filter(function (t) {
          return t.val >= 5;
        });
      }

      function s(t, e) {
        var n,
            r,
            o,
            a,
            u = [],
            c = [];

        for (n = 0; n < t.length; n++) {
          for (r = x.data.length, u.length = 0; r--;) {
            x.data[r] === t[n].label && (o = b.data[r], u.push(o));
          }

          a = i(u), a && c.push(a);
        }

        return c;
      }

      function f(t) {
        var e = n.i(w.g)(t, .9),
            r = n.i(w.h)(e, 1, function (t) {
          return t.getPoints().length;
        }),
            o = [],
            i = [];

        if (1 === r.length) {
          o = r[0].item.getPoints();

          for (var a = 0; a < o.length; a++) {
            i.push(o[a].point);
          }
        }

        return i;
      }

      function l(t, e) {
        E.subImageAsCopy(g, n.i(w.b)(t, e)), A.skeletonize();
      }

      function d(t, e, n, r) {
        var o,
            i,
            a,
            u,
            c = [],
            s = [],
            l = Math.ceil(C.x / 3);

        if (t.length >= 2) {
          for (o = 0; o < t.length; o++) {
            t[o].m00 > l && c.push(t[o]);
          }

          if (c.length >= 2) {
            for (a = f(c), i = 0, o = 0; o < a.length; o++) {
              i += a[o].rad;
            }

            a.length > 1 && a.length >= c.length / 4 * 3 && a.length > t.length / 4 && (i /= a.length, u = {
              index: e[1] * z.x + e[0],
              pos: {
                x: n,
                y: r
              },
              box: [I.clone([n, r]), I.clone([n + g.size.x, r]), I.clone([n + g.size.x, r + g.size.y]), I.clone([n, r + g.size.y])],
              moments: a,
              rad: i,
              vec: I.clone([Math.cos(i), Math.sin(i)])
            }, s.push(u));
          }
        }

        return s;
      }

      function h(t) {
        function e() {
          var t;

          for (t = 0; t < x.data.length; t++) {
            if (0 === x.data[t] && 1 === m.data[t]) return t;
          }

          return x.length;
        }

        function n(t) {
          var e,
              r,
              o,
              u,
              c,
              s = {
            x: t % x.size.x,
            y: t / x.size.x | 0
          };
          if (t < x.data.length) for (o = b.data[t], x.data[t] = i, c = 0; c < D.a.searchDirections.length; c++) {
            r = s.y + D.a.searchDirections[c][0], e = s.x + D.a.searchDirections[c][1], u = r * x.size.x + e, 0 !== m.data[u] ? 0 === x.data[u] && Math.abs(I.dot(b.data[u].vec, o.vec)) > a && n(u) : x.data[u] = Number.MAX_VALUE;
          }
        }

        var r,
            o,
            i = 0,
            a = .95,
            u = 0;

        for (T.a.init(m.data, 0), T.a.init(x.data, 0), T.a.init(b.data, null), r = 0; r < t.length; r++) {
          o = t[r], b.data[o.index] = o, m.data[o.index] = 1;
        }

        for (m.zeroBorder(); (u = e()) < x.data.length;) {
          i++, n(u);
        }

        return i;
      }

      var p,
          v,
          _,
          g,
          y,
          m,
          x,
          b,
          E,
          C,
          O,
          A,
          R = n(20),
          w = n(19),
          T = n(3),
          S = (n(9), n(65)),
          D = n(30),
          P = n(66),
          I = {
        clone: n(7),
        dot: n(32),
        scale: n(81),
        transformMat2: n(82)
      },
          M = {
        copy: n(78),
        create: n(79),
        invert: n(80)
      },
          N = {
        ctx: {
          binary: null
        },
        dom: {
          binary: null
        }
      },
          z = {
        x: 0,
        y: 0
      };

      e.a = {
        init: function init(t, e) {
          p = e, O = t, r(), o();
        },
        locate: function locate() {
          var t, e;
          if (p.halfSample && n.i(w.i)(O, v), a(), t = u(), t.length < z.x * z.y * .05) return null;
          var r = h(t);
          return r < 1 ? null : (e = c(r), 0 === e.length ? null : s(e, r));
        },
        checkImageConstraints: function checkImageConstraints(t, e) {
          var r,
              o,
              i,
              a = t.getWidth(),
              u = t.getHeight(),
              c = e.halfSample ? .5 : 1;
          if (t.getConfig().area && (i = n.i(w.j)(a, u, t.getConfig().area), t.setTopRight({
            x: i.sx,
            y: i.sy
          }), t.setCanvasSize({
            x: a,
            y: u
          }), a = i.sw, u = i.sh), o = {
            x: Math.floor(a * c),
            y: Math.floor(u * c)
          }, r = n.i(w.e)(e.patchSize, o), t.setWidth(Math.floor(Math.floor(o.x / r.x) * (1 / c) * r.x)), t.setHeight(Math.floor(Math.floor(o.y / r.y) * (1 / c) * r.y)), t.getWidth() % r.x == 0 && t.getHeight() % r.y == 0) return !0;
          throw new Error("Image dimensions do not comply with the current settings: Width (" + a + " )and height (" + u + ") must a multiple of " + r.x);
        }
      };
    }).call(e, n(47));
  }, function (t, e, n) {
    "use strict";

    var r = n(30),
        o = {
      createContour2D: function createContour2D() {
        return {
          dir: null,
          index: null,
          firstVertex: null,
          insideContours: null,
          nextpeer: null,
          prevpeer: null
        };
      },
      CONTOUR_DIR: {
        CW_DIR: 0,
        CCW_DIR: 1,
        UNKNOWN_DIR: 2
      },
      DIR: {
        OUTSIDE_EDGE: -32767,
        INSIDE_EDGE: -32766
      },
      create: function create(t, e) {
        var n = t.data,
            i = e.data,
            a = t.size.x,
            u = t.size.y,
            c = r.a.create(t, e);
        return {
          rasterize: function rasterize(t) {
            var e,
                r,
                s,
                f,
                l,
                d,
                h,
                p,
                v,
                _,
                g,
                y,
                m = [],
                x = 0;

            for (y = 0; y < 400; y++) {
              m[y] = 0;
            }

            for (m[0] = n[0], v = null, d = 1; d < u - 1; d++) {
              for (f = 0, r = m[0], l = 1; l < a - 1; l++) {
                if (g = d * a + l, 0 === i[g]) {
                  if ((e = n[g]) !== r) {
                    if (0 === f) s = x + 1, m[s] = e, r = e, null !== (h = c.contourTracing(d, l, s, e, o.DIR.OUTSIDE_EDGE)) && (x++, f = s, p = o.createContour2D(), p.dir = o.CONTOUR_DIR.CW_DIR, p.index = f, p.firstVertex = h, p.nextpeer = v, p.insideContours = null, null !== v && (v.prevpeer = p), v = p);else if (null !== (h = c.contourTracing(d, l, o.DIR.INSIDE_EDGE, e, f))) {
                      for (p = o.createContour2D(), p.firstVertex = h, p.insideContours = null, p.dir = 0 === t ? o.CONTOUR_DIR.CCW_DIR : o.CONTOUR_DIR.CW_DIR, p.index = t, _ = v; null !== _ && _.index !== f;) {
                        _ = _.nextpeer;
                      }

                      null !== _ && (p.nextpeer = _.insideContours, null !== _.insideContours && (_.insideContours.prevpeer = p), _.insideContours = p);
                    }
                  } else i[g] = f;
                } else i[g] === o.DIR.OUTSIDE_EDGE || i[g] === o.DIR.INSIDE_EDGE ? (f = 0, r = i[g] === o.DIR.INSIDE_EDGE ? n[g] : m[0]) : (f = i[g], r = m[f]);
              }
            }

            for (_ = v; null !== _;) {
              _.index = t, _ = _.nextpeer;
            }

            return {
              cc: v,
              count: x
            };
          },
          debug: {
            drawContour: function drawContour(t, e) {
              var n,
                  r,
                  i,
                  a = t.getContext("2d"),
                  u = e;

              for (a.strokeStyle = "red", a.fillStyle = "red", a.lineWidth = 1, n = null !== u ? u.insideContours : null; null !== u;) {
                switch (null !== n ? (r = n, n = n.nextpeer) : (r = u, u = u.nextpeer, n = null !== u ? u.insideContours : null), r.dir) {
                  case o.CONTOUR_DIR.CW_DIR:
                    a.strokeStyle = "red";
                    break;

                  case o.CONTOUR_DIR.CCW_DIR:
                    a.strokeStyle = "blue";
                    break;

                  case o.CONTOUR_DIR.UNKNOWN_DIR:
                    a.strokeStyle = "green";
                }

                i = r.firstVertex, a.beginPath(), a.moveTo(i.x, i.y);

                do {
                  i = i.next, a.lineTo(i.x, i.y);
                } while (i !== r.firstVertex);

                a.stroke();
              }
            }
          }
        };
      }
    };
    e.a = o;
  }, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    function Skeletonizer(stdlib, foreign, buffer) {
      "use asm";

      var images = new stdlib.Uint8Array(buffer),
          size = foreign.size | 0,
          imul = stdlib.Math.imul;

      function erode(inImagePtr, outImagePtr) {
        inImagePtr = inImagePtr | 0;
        outImagePtr = outImagePtr | 0;
        var v = 0,
            u = 0,
            sum = 0,
            yStart1 = 0,
            yStart2 = 0,
            xStart1 = 0,
            xStart2 = 0,
            offset = 0;

        for (v = 1; (v | 0) < (size - 1 | 0); v = v + 1 | 0) {
          offset = offset + size | 0;

          for (u = 1; (u | 0) < (size - 1 | 0); u = u + 1 | 0) {
            yStart1 = offset - size | 0;
            yStart2 = offset + size | 0;
            xStart1 = u - 1 | 0;
            xStart2 = u + 1 | 0;
            sum = (images[inImagePtr + yStart1 + xStart1 | 0] | 0) + (images[inImagePtr + yStart1 + xStart2 | 0] | 0) + (images[inImagePtr + offset + u | 0] | 0) + (images[inImagePtr + yStart2 + xStart1 | 0] | 0) + (images[inImagePtr + yStart2 + xStart2 | 0] | 0) | 0;

            if ((sum | 0) == (5 | 0)) {
              images[outImagePtr + offset + u | 0] = 1;
            } else {
              images[outImagePtr + offset + u | 0] = 0;
            }
          }
        }

        return;
      }

      function subtract(aImagePtr, bImagePtr, outImagePtr) {
        aImagePtr = aImagePtr | 0;
        bImagePtr = bImagePtr | 0;
        outImagePtr = outImagePtr | 0;
        var length = 0;
        length = imul(size, size) | 0;

        while ((length | 0) > 0) {
          length = length - 1 | 0;
          images[outImagePtr + length | 0] = (images[aImagePtr + length | 0] | 0) - (images[bImagePtr + length | 0] | 0) | 0;
        }
      }

      function bitwiseOr(aImagePtr, bImagePtr, outImagePtr) {
        aImagePtr = aImagePtr | 0;
        bImagePtr = bImagePtr | 0;
        outImagePtr = outImagePtr | 0;
        var length = 0;
        length = imul(size, size) | 0;

        while ((length | 0) > 0) {
          length = length - 1 | 0;
          images[outImagePtr + length | 0] = images[aImagePtr + length | 0] | 0 | (images[bImagePtr + length | 0] | 0) | 0;
        }
      }

      function countNonZero(imagePtr) {
        imagePtr = imagePtr | 0;
        var sum = 0,
            length = 0;
        length = imul(size, size) | 0;

        while ((length | 0) > 0) {
          length = length - 1 | 0;
          sum = (sum | 0) + (images[imagePtr + length | 0] | 0) | 0;
        }

        return sum | 0;
      }

      function init(imagePtr, value) {
        imagePtr = imagePtr | 0;
        value = value | 0;
        var length = 0;
        length = imul(size, size) | 0;

        while ((length | 0) > 0) {
          length = length - 1 | 0;
          images[imagePtr + length | 0] = value;
        }
      }

      function dilate(inImagePtr, outImagePtr) {
        inImagePtr = inImagePtr | 0;
        outImagePtr = outImagePtr | 0;
        var v = 0,
            u = 0,
            sum = 0,
            yStart1 = 0,
            yStart2 = 0,
            xStart1 = 0,
            xStart2 = 0,
            offset = 0;

        for (v = 1; (v | 0) < (size - 1 | 0); v = v + 1 | 0) {
          offset = offset + size | 0;

          for (u = 1; (u | 0) < (size - 1 | 0); u = u + 1 | 0) {
            yStart1 = offset - size | 0;
            yStart2 = offset + size | 0;
            xStart1 = u - 1 | 0;
            xStart2 = u + 1 | 0;
            sum = (images[inImagePtr + yStart1 + xStart1 | 0] | 0) + (images[inImagePtr + yStart1 + xStart2 | 0] | 0) + (images[inImagePtr + offset + u | 0] | 0) + (images[inImagePtr + yStart2 + xStart1 | 0] | 0) + (images[inImagePtr + yStart2 + xStart2 | 0] | 0) | 0;

            if ((sum | 0) > (0 | 0)) {
              images[outImagePtr + offset + u | 0] = 1;
            } else {
              images[outImagePtr + offset + u | 0] = 0;
            }
          }
        }

        return;
      }

      function memcpy(srcImagePtr, dstImagePtr) {
        srcImagePtr = srcImagePtr | 0;
        dstImagePtr = dstImagePtr | 0;
        var length = 0;
        length = imul(size, size) | 0;

        while ((length | 0) > 0) {
          length = length - 1 | 0;
          images[dstImagePtr + length | 0] = images[srcImagePtr + length | 0] | 0;
        }
      }

      function zeroBorder(imagePtr) {
        imagePtr = imagePtr | 0;
        var x = 0,
            y = 0;

        for (x = 0; (x | 0) < (size - 1 | 0); x = x + 1 | 0) {
          images[imagePtr + x | 0] = 0;
          images[imagePtr + y | 0] = 0;
          y = y + size - 1 | 0;
          images[imagePtr + y | 0] = 0;
          y = y + 1 | 0;
        }

        for (x = 0; (x | 0) < (size | 0); x = x + 1 | 0) {
          images[imagePtr + y | 0] = 0;
          y = y + 1 | 0;
        }
      }

      function skeletonize() {
        var subImagePtr = 0,
            erodedImagePtr = 0,
            tempImagePtr = 0,
            skelImagePtr = 0,
            sum = 0,
            done = 0;
        erodedImagePtr = imul(size, size) | 0;
        tempImagePtr = erodedImagePtr + erodedImagePtr | 0;
        skelImagePtr = tempImagePtr + erodedImagePtr | 0;
        init(skelImagePtr, 0);
        zeroBorder(subImagePtr);

        do {
          erode(subImagePtr, erodedImagePtr);
          dilate(erodedImagePtr, tempImagePtr);
          subtract(subImagePtr, tempImagePtr, tempImagePtr);
          bitwiseOr(skelImagePtr, tempImagePtr, skelImagePtr);
          memcpy(erodedImagePtr, subImagePtr);
          sum = countNonZero(subImagePtr) | 0;
          done = (sum | 0) == 0 | 0;
        } while (!done);
      }

      return {
        skeletonize: skeletonize
      };
    }

    __webpack_exports__["a"] = Skeletonizer;
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      o.a.call(this, t), this.barSpaceRatio = [1, 1];
    }

    var o = n(1),
        i = 1,
        a = 3,
        u = {
      START_PATTERN: {
        value: [a, i, a, i, i, i]
      },
      STOP_PATTERN: {
        value: [a, i, i, i, a]
      },
      CODE_PATTERN: {
        value: [[i, i, a, a, i], [a, i, i, i, a], [i, a, i, i, a], [a, a, i, i, i], [i, i, a, i, a], [a, i, a, i, i], [i, a, a, i, i], [i, i, i, a, a], [a, i, i, a, i], [i, a, i, a, i]]
      },
      SINGLE_CODE_ERROR: {
        value: .78,
        writable: !0
      },
      AVG_CODE_ERROR: {
        value: .3,
        writable: !0
      },
      FORMAT: {
        value: "2of5"
      }
    },
        c = u.START_PATTERN.value.reduce(function (t, e) {
      return t + e;
    }, 0);
    r.prototype = Object.create(o.a.prototype, u), r.prototype.constructor = r, r.prototype._findPattern = function (t, e, n, r) {
      var o,
          i,
          a,
          u,
          c = [],
          s = this,
          f = 0,
          l = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0
      },
          d = s.AVG_CODE_ERROR;

      for (n = n || !1, r = r || !1, e || (e = s._nextSet(s._row)), o = 0; o < t.length; o++) {
        c[o] = 0;
      }

      for (o = e; o < s._row.length; o++) {
        if (s._row[o] ^ n) c[f]++;else {
          if (f === c.length - 1) {
            for (u = 0, a = 0; a < c.length; a++) {
              u += c[a];
            }

            if ((i = s._matchPattern(c, t)) < d) return l.error = i, l.start = o - u, l.end = o, l;
            if (!r) return null;

            for (a = 0; a < c.length - 2; a++) {
              c[a] = c[a + 2];
            }

            c[c.length - 2] = 0, c[c.length - 1] = 0, f--;
          } else f++;

          c[f] = 1, n = !n;
        }
      }

      return null;
    }, r.prototype._findStart = function () {
      for (var t, e, n = this, r = n._nextSet(n._row), o = 1; !e;) {
        if (!(e = n._findPattern(n.START_PATTERN, r, !1, !0))) return null;
        if (o = Math.floor((e.end - e.start) / c), (t = e.start - 5 * o) >= 0 && n._matchRange(t, e.start, 0)) return e;
        r = e.end, e = null;
      }
    }, r.prototype._verifyTrailingWhitespace = function (t) {
      var e,
          n = this;
      return e = t.end + (t.end - t.start) / 2, e < n._row.length && n._matchRange(t.end, e, 0) ? t : null;
    }, r.prototype._findEnd = function () {
      var t,
          e,
          n,
          r = this;
      return r._row.reverse(), n = r._nextSet(r._row), t = r._findPattern(r.STOP_PATTERN, n, !1, !0), r._row.reverse(), null === t ? null : (e = t.start, t.start = r._row.length - t.end, t.end = r._row.length - e, null !== t ? r._verifyTrailingWhitespace(t) : null);
    }, r.prototype._decodeCode = function (t) {
      var e,
          n,
          r,
          o = this,
          i = 0,
          a = o.AVG_CODE_ERROR,
          u = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0
      };

      for (e = 0; e < t.length; e++) {
        i += t[e];
      }

      for (r = 0; r < o.CODE_PATTERN.length; r++) {
        (n = o._matchPattern(t, o.CODE_PATTERN[r])) < u.error && (u.code = r, u.error = n);
      }

      if (u.error < a) return u;
    }, r.prototype._decodePayload = function (t, e, n) {
      for (var r, o, i = this, a = 0, u = t.length, c = [0, 0, 0, 0, 0]; a < u;) {
        for (r = 0; r < 5; r++) {
          c[r] = t[a] * this.barSpaceRatio[0], a += 2;
        }

        if (!(o = i._decodeCode(c))) return null;
        e.push(o.code + ""), n.push(o);
      }

      return o;
    }, r.prototype._verifyCounterLength = function (t) {
      return t.length % 10 == 0;
    }, r.prototype._decode = function () {
      var t,
          e,
          n,
          r = this,
          o = [],
          i = [];
      return (t = r._findStart()) ? (i.push(t), (e = r._findEnd()) ? (n = r._fillCounters(t.end, e.start, !1), r._verifyCounterLength(n) && r._decodePayload(n, o, i) ? o.length < 5 ? null : (i.push(e), {
        code: o.join(""),
        start: t.start,
        end: e.end,
        startInfo: t,
        decodedCodes: i
      }) : null) : null) : null;
    }, e.a = r;
  }, function (t, e, n) {
    "use strict";

    function r() {
      o.a.call(this), this._counters = [];
    }

    var o = n(1),
        i = {
      ALPHABETH_STRING: {
        value: "0123456789-$:/.+ABCD"
      },
      ALPHABET: {
        value: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 45, 36, 58, 47, 46, 43, 65, 66, 67, 68]
      },
      CHARACTER_ENCODINGS: {
        value: [3, 6, 9, 96, 18, 66, 33, 36, 48, 72, 12, 24, 69, 81, 84, 21, 26, 41, 11, 14]
      },
      START_END: {
        value: [26, 41, 11, 14]
      },
      MIN_ENCODED_CHARS: {
        value: 4
      },
      MAX_ACCEPTABLE: {
        value: 2
      },
      PADDING: {
        value: 1.5
      },
      FORMAT: {
        value: "codabar",
        writeable: !1
      }
    };
    r.prototype = Object.create(o.a.prototype, i), r.prototype.constructor = r, r.prototype._decode = function () {
      var t,
          e,
          n,
          r,
          o,
          i = this,
          a = [];
      if (this._counters = i._fillCounters(), !(t = i._findStart())) return null;
      r = t.startCounter;

      do {
        if ((n = i._toPattern(r)) < 0) return null;
        if ((e = i._patternToChar(n)) < 0) return null;
        if (a.push(e), r += 8, a.length > 1 && i._isStartEnd(n)) break;
      } while (r < i._counters.length);

      return a.length - 2 < i.MIN_ENCODED_CHARS || !i._isStartEnd(n) ? null : i._verifyWhitespace(t.startCounter, r - 8) && i._validateResult(a, t.startCounter) ? (r = r > i._counters.length ? i._counters.length : r, o = t.start + i._sumCounters(t.startCounter, r - 8), {
        code: a.join(""),
        start: t.start,
        end: o,
        startInfo: t,
        decodedCodes: a
      }) : null;
    }, r.prototype._verifyWhitespace = function (t, e) {
      return (t - 1 <= 0 || this._counters[t - 1] >= this._calculatePatternLength(t) / 2) && (e + 8 >= this._counters.length || this._counters[e + 7] >= this._calculatePatternLength(e) / 2);
    }, r.prototype._calculatePatternLength = function (t) {
      var e,
          n = 0;

      for (e = t; e < t + 7; e++) {
        n += this._counters[e];
      }

      return n;
    }, r.prototype._thresholdResultPattern = function (t, e) {
      var n,
          r,
          o,
          i,
          a,
          u = this,
          c = {
        space: {
          narrow: {
            size: 0,
            counts: 0,
            min: 0,
            max: Number.MAX_VALUE
          },
          wide: {
            size: 0,
            counts: 0,
            min: 0,
            max: Number.MAX_VALUE
          }
        },
        bar: {
          narrow: {
            size: 0,
            counts: 0,
            min: 0,
            max: Number.MAX_VALUE
          },
          wide: {
            size: 0,
            counts: 0,
            min: 0,
            max: Number.MAX_VALUE
          }
        }
      },
          s = e;

      for (o = 0; o < t.length; o++) {
        for (a = u._charToPattern(t[o]), i = 6; i >= 0; i--) {
          n = 2 == (1 & i) ? c.bar : c.space, r = 1 == (1 & a) ? n.wide : n.narrow, r.size += u._counters[s + i], r.counts++, a >>= 1;
        }

        s += 8;
      }

      return ["space", "bar"].forEach(function (t) {
        var e = c[t];
        e.wide.min = Math.floor((e.narrow.size / e.narrow.counts + e.wide.size / e.wide.counts) / 2), e.narrow.max = Math.ceil(e.wide.min), e.wide.max = Math.ceil((e.wide.size * u.MAX_ACCEPTABLE + u.PADDING) / e.wide.counts);
      }), c;
    }, r.prototype._charToPattern = function (t) {
      var e,
          n = this,
          r = t.charCodeAt(0);

      for (e = 0; e < n.ALPHABET.length; e++) {
        if (n.ALPHABET[e] === r) return n.CHARACTER_ENCODINGS[e];
      }

      return 0;
    }, r.prototype._validateResult = function (t, e) {
      var n,
          r,
          o,
          i,
          a,
          u,
          c = this,
          s = c._thresholdResultPattern(t, e),
          f = e;

      for (n = 0; n < t.length; n++) {
        for (u = c._charToPattern(t[n]), r = 6; r >= 0; r--) {
          if (o = 0 == (1 & r) ? s.bar : s.space, i = 1 == (1 & u) ? o.wide : o.narrow, (a = c._counters[f + r]) < i.min || a > i.max) return !1;
          u >>= 1;
        }

        f += 8;
      }

      return !0;
    }, r.prototype._patternToChar = function (t) {
      var e,
          n = this;

      for (e = 0; e < n.CHARACTER_ENCODINGS.length; e++) {
        if (n.CHARACTER_ENCODINGS[e] === t) return String.fromCharCode(n.ALPHABET[e]);
      }

      return -1;
    }, r.prototype._computeAlternatingThreshold = function (t, e) {
      var n,
          r,
          o = Number.MAX_VALUE,
          i = 0;

      for (n = t; n < e; n += 2) {
        r = this._counters[n], r > i && (i = r), r < o && (o = r);
      }

      return (o + i) / 2 | 0;
    }, r.prototype._toPattern = function (t) {
      var e,
          n,
          r,
          o,
          i = 7,
          a = t + i,
          u = 1 << i - 1,
          c = 0;
      if (a > this._counters.length) return -1;

      for (e = this._computeAlternatingThreshold(t, a), n = this._computeAlternatingThreshold(t + 1, a), r = 0; r < i; r++) {
        o = 0 == (1 & r) ? e : n, this._counters[t + r] > o && (c |= u), u >>= 1;
      }

      return c;
    }, r.prototype._isStartEnd = function (t) {
      var e;

      for (e = 0; e < this.START_END.length; e++) {
        if (this.START_END[e] === t) return !0;
      }

      return !1;
    }, r.prototype._sumCounters = function (t, e) {
      var n,
          r = 0;

      for (n = t; n < e; n++) {
        r += this._counters[n];
      }

      return r;
    }, r.prototype._findStart = function () {
      var t,
          e,
          n,
          r = this,
          o = r._nextUnset(r._row);

      for (t = 1; t < this._counters.length; t++) {
        if ((e = r._toPattern(t)) !== -1 && r._isStartEnd(e)) return o += r._sumCounters(0, t), n = o + r._sumCounters(t, t + 8), {
          start: o,
          end: n,
          startCounter: t,
          endCounter: t + 8
        };
      }
    }, e.a = r;
  }, function (t, e, n) {
    "use strict";

    function r() {
      i.a.call(this);
    }

    function o(t, e, n) {
      for (var r = n.length, o = 0, i = 0; r--;) {
        i += t[n[r]], o += e[n[r]];
      }

      return i / o;
    }

    var i = n(1),
        a = {
      CODE_SHIFT: {
        value: 98
      },
      CODE_C: {
        value: 99
      },
      CODE_B: {
        value: 100
      },
      CODE_A: {
        value: 101
      },
      START_CODE_A: {
        value: 103
      },
      START_CODE_B: {
        value: 104
      },
      START_CODE_C: {
        value: 105
      },
      STOP_CODE: {
        value: 106
      },
      CODE_PATTERN: {
        value: [[2, 1, 2, 2, 2, 2], [2, 2, 2, 1, 2, 2], [2, 2, 2, 2, 2, 1], [1, 2, 1, 2, 2, 3], [1, 2, 1, 3, 2, 2], [1, 3, 1, 2, 2, 2], [1, 2, 2, 2, 1, 3], [1, 2, 2, 3, 1, 2], [1, 3, 2, 2, 1, 2], [2, 2, 1, 2, 1, 3], [2, 2, 1, 3, 1, 2], [2, 3, 1, 2, 1, 2], [1, 1, 2, 2, 3, 2], [1, 2, 2, 1, 3, 2], [1, 2, 2, 2, 3, 1], [1, 1, 3, 2, 2, 2], [1, 2, 3, 1, 2, 2], [1, 2, 3, 2, 2, 1], [2, 2, 3, 2, 1, 1], [2, 2, 1, 1, 3, 2], [2, 2, 1, 2, 3, 1], [2, 1, 3, 2, 1, 2], [2, 2, 3, 1, 1, 2], [3, 1, 2, 1, 3, 1], [3, 1, 1, 2, 2, 2], [3, 2, 1, 1, 2, 2], [3, 2, 1, 2, 2, 1], [3, 1, 2, 2, 1, 2], [3, 2, 2, 1, 1, 2], [3, 2, 2, 2, 1, 1], [2, 1, 2, 1, 2, 3], [2, 1, 2, 3, 2, 1], [2, 3, 2, 1, 2, 1], [1, 1, 1, 3, 2, 3], [1, 3, 1, 1, 2, 3], [1, 3, 1, 3, 2, 1], [1, 1, 2, 3, 1, 3], [1, 3, 2, 1, 1, 3], [1, 3, 2, 3, 1, 1], [2, 1, 1, 3, 1, 3], [2, 3, 1, 1, 1, 3], [2, 3, 1, 3, 1, 1], [1, 1, 2, 1, 3, 3], [1, 1, 2, 3, 3, 1], [1, 3, 2, 1, 3, 1], [1, 1, 3, 1, 2, 3], [1, 1, 3, 3, 2, 1], [1, 3, 3, 1, 2, 1], [3, 1, 3, 1, 2, 1], [2, 1, 1, 3, 3, 1], [2, 3, 1, 1, 3, 1], [2, 1, 3, 1, 1, 3], [2, 1, 3, 3, 1, 1], [2, 1, 3, 1, 3, 1], [3, 1, 1, 1, 2, 3], [3, 1, 1, 3, 2, 1], [3, 3, 1, 1, 2, 1], [3, 1, 2, 1, 1, 3], [3, 1, 2, 3, 1, 1], [3, 3, 2, 1, 1, 1], [3, 1, 4, 1, 1, 1], [2, 2, 1, 4, 1, 1], [4, 3, 1, 1, 1, 1], [1, 1, 1, 2, 2, 4], [1, 1, 1, 4, 2, 2], [1, 2, 1, 1, 2, 4], [1, 2, 1, 4, 2, 1], [1, 4, 1, 1, 2, 2], [1, 4, 1, 2, 2, 1], [1, 1, 2, 2, 1, 4], [1, 1, 2, 4, 1, 2], [1, 2, 2, 1, 1, 4], [1, 2, 2, 4, 1, 1], [1, 4, 2, 1, 1, 2], [1, 4, 2, 2, 1, 1], [2, 4, 1, 2, 1, 1], [2, 2, 1, 1, 1, 4], [4, 1, 3, 1, 1, 1], [2, 4, 1, 1, 1, 2], [1, 3, 4, 1, 1, 1], [1, 1, 1, 2, 4, 2], [1, 2, 1, 1, 4, 2], [1, 2, 1, 2, 4, 1], [1, 1, 4, 2, 1, 2], [1, 2, 4, 1, 1, 2], [1, 2, 4, 2, 1, 1], [4, 1, 1, 2, 1, 2], [4, 2, 1, 1, 1, 2], [4, 2, 1, 2, 1, 1], [2, 1, 2, 1, 4, 1], [2, 1, 4, 1, 2, 1], [4, 1, 2, 1, 2, 1], [1, 1, 1, 1, 4, 3], [1, 1, 1, 3, 4, 1], [1, 3, 1, 1, 4, 1], [1, 1, 4, 1, 1, 3], [1, 1, 4, 3, 1, 1], [4, 1, 1, 1, 1, 3], [4, 1, 1, 3, 1, 1], [1, 1, 3, 1, 4, 1], [1, 1, 4, 1, 3, 1], [3, 1, 1, 1, 4, 1], [4, 1, 1, 1, 3, 1], [2, 1, 1, 4, 1, 2], [2, 1, 1, 2, 1, 4], [2, 1, 1, 2, 3, 2], [2, 3, 3, 1, 1, 1, 2]]
      },
      SINGLE_CODE_ERROR: {
        value: .64
      },
      AVG_CODE_ERROR: {
        value: .3
      },
      FORMAT: {
        value: "code_128",
        writeable: !1
      },
      MODULE_INDICES: {
        value: {
          bar: [0, 2, 4],
          space: [1, 3, 5]
        }
      }
    };
    r.prototype = Object.create(i.a.prototype, a), r.prototype.constructor = r, r.prototype._decodeCode = function (t, e) {
      var n,
          r,
          i,
          a = [0, 0, 0, 0, 0, 0],
          u = this,
          c = t,
          s = !u._row[c],
          f = 0,
          l = {
        error: Number.MAX_VALUE,
        code: -1,
        start: t,
        end: t,
        correction: {
          bar: 1,
          space: 1
        }
      };

      for (n = c; n < u._row.length; n++) {
        if (u._row[n] ^ s) a[f]++;else {
          if (f === a.length - 1) {
            for (e && u._correct(a, e), r = 0; r < u.CODE_PATTERN.length; r++) {
              (i = u._matchPattern(a, u.CODE_PATTERN[r])) < l.error && (l.code = r, l.error = i);
            }

            return l.end = n, l.code === -1 || l.error > u.AVG_CODE_ERROR ? null : (u.CODE_PATTERN[l.code] && (l.correction.bar = o(u.CODE_PATTERN[l.code], a, this.MODULE_INDICES.bar), l.correction.space = o(u.CODE_PATTERN[l.code], a, this.MODULE_INDICES.space)), l);
          }

          f++, a[f] = 1, s = !s;
        }
      }

      return null;
    }, r.prototype._correct = function (t, e) {
      this._correctBars(t, e.bar, this.MODULE_INDICES.bar), this._correctBars(t, e.space, this.MODULE_INDICES.space);
    }, r.prototype._findStart = function () {
      var t,
          e,
          n,
          r,
          i,
          a = [0, 0, 0, 0, 0, 0],
          u = this,
          c = u._nextSet(u._row),
          s = !1,
          f = 0,
          l = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0,
        correction: {
          bar: 1,
          space: 1
        }
      };

      for (t = c; t < u._row.length; t++) {
        if (u._row[t] ^ s) a[f]++;else {
          if (f === a.length - 1) {
            for (i = 0, r = 0; r < a.length; r++) {
              i += a[r];
            }

            for (e = u.START_CODE_A; e <= u.START_CODE_C; e++) {
              (n = u._matchPattern(a, u.CODE_PATTERN[e])) < l.error && (l.code = e, l.error = n);
            }

            if (l.error < u.AVG_CODE_ERROR) return l.start = t - i, l.end = t, l.correction.bar = o(u.CODE_PATTERN[l.code], a, this.MODULE_INDICES.bar), l.correction.space = o(u.CODE_PATTERN[l.code], a, this.MODULE_INDICES.space), l;

            for (r = 0; r < 4; r++) {
              a[r] = a[r + 2];
            }

            a[4] = 0, a[5] = 0, f--;
          } else f++;

          a[f] = 1, s = !s;
        }
      }

      return null;
    }, r.prototype._decode = function () {
      var t,
          e,
          n = this,
          r = n._findStart(),
          o = null,
          i = !1,
          a = [],
          u = 0,
          c = 0,
          s = [],
          f = [],
          l = !1,
          d = !0;

      if (null === r) return null;

      switch (o = {
        code: r.code,
        start: r.start,
        end: r.end,
        correction: {
          bar: r.correction.bar,
          space: r.correction.space
        }
      }, f.push(o), c = o.code, o.code) {
        case n.START_CODE_A:
          t = n.CODE_A;
          break;

        case n.START_CODE_B:
          t = n.CODE_B;
          break;

        case n.START_CODE_C:
          t = n.CODE_C;
          break;

        default:
          return null;
      }

      for (; !i;) {
        if (e = l, l = !1, null !== (o = n._decodeCode(o.end, o.correction))) switch (o.code !== n.STOP_CODE && (d = !0), o.code !== n.STOP_CODE && (s.push(o.code), u++, c += u * o.code), f.push(o), t) {
          case n.CODE_A:
            if (o.code < 64) a.push(String.fromCharCode(32 + o.code));else if (o.code < 96) a.push(String.fromCharCode(o.code - 64));else switch (o.code !== n.STOP_CODE && (d = !1), o.code) {
              case n.CODE_SHIFT:
                l = !0, t = n.CODE_B;
                break;

              case n.CODE_B:
                t = n.CODE_B;
                break;

              case n.CODE_C:
                t = n.CODE_C;
                break;

              case n.STOP_CODE:
                i = !0;
            }
            break;

          case n.CODE_B:
            if (o.code < 96) a.push(String.fromCharCode(32 + o.code));else switch (o.code !== n.STOP_CODE && (d = !1), o.code) {
              case n.CODE_SHIFT:
                l = !0, t = n.CODE_A;
                break;

              case n.CODE_A:
                t = n.CODE_A;
                break;

              case n.CODE_C:
                t = n.CODE_C;
                break;

              case n.STOP_CODE:
                i = !0;
            }
            break;

          case n.CODE_C:
            if (o.code < 100) a.push(o.code < 10 ? "0" + o.code : o.code);else switch (o.code !== n.STOP_CODE && (d = !1), o.code) {
              case n.CODE_A:
                t = n.CODE_A;
                break;

              case n.CODE_B:
                t = n.CODE_B;
                break;

              case n.STOP_CODE:
                i = !0;
            }
        } else i = !0;
        e && (t = t === n.CODE_A ? n.CODE_B : n.CODE_A);
      }

      return null === o ? null : (o.end = n._nextUnset(n._row, o.end), n._verifyTrailingWhitespace(o) ? (c -= u * s[s.length - 1]) % 103 !== s[s.length - 1] ? null : a.length ? (d && a.splice(a.length - 1, 1), {
        code: a.join(""),
        start: r.start,
        end: o.end,
        codeset: t,
        startInfo: r,
        decodedCodes: f,
        endInfo: o
      }) : null : null);
    }, i.a.prototype._verifyTrailingWhitespace = function (t) {
      var e,
          n = this;
      return e = t.end + (t.end - t.start) / 2, e < n._row.length && n._matchRange(t.end, e, 0) ? t : null;
    }, e.a = r;
  }, function (t, e, n) {
    "use strict";

    function r() {
      o.a.call(this);
    }

    var o = n(31),
        i = {
      IOQ: /[IOQ]/g,
      AZ09: /[A-Z0-9]{17}/
    };
    r.prototype = Object.create(o.a.prototype), r.prototype.constructor = r, r.prototype._decode = function () {
      var t = o.a.prototype._decode.apply(this);

      if (!t) return null;
      var e = t.code;
      return e ? (e = e.replace(i.IOQ, ""), e.match(i.AZ09) && this._checkChecksum(e) ? (t.code = e, t) : null) : null;
    }, r.prototype._checkChecksum = function (t) {
      return !!t;
    }, e.a = r;
  }, function (t, e, n) {
    "use strict";

    function r() {
      o.a.call(this);
    }

    var o = n(1),
        i = n(3),
        a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*",
        u = {
      ALPHABETH_STRING: {
        value: a
      },
      ALPHABET: {
        value: a.split("").map(function (t) {
          return t.charCodeAt(0);
        })
      },
      CHARACTER_ENCODINGS: {
        value: [276, 328, 324, 322, 296, 292, 290, 336, 274, 266, 424, 420, 418, 404, 402, 394, 360, 356, 354, 308, 282, 344, 332, 326, 300, 278, 436, 434, 428, 422, 406, 410, 364, 358, 310, 314, 302, 468, 466, 458, 366, 374, 430, 294, 474, 470, 306, 350]
      },
      ASTERISK: {
        value: 350
      },
      FORMAT: {
        value: "code_93",
        writeable: !1
      }
    };
    r.prototype = Object.create(o.a.prototype, u), r.prototype.constructor = r, r.prototype._decode = function () {
      var t,
          e,
          n,
          r,
          o = this,
          a = [0, 0, 0, 0, 0, 0],
          u = [],
          c = o._findStart();

      if (!c) return null;
      r = o._nextSet(o._row, c.end);

      do {
        if (a = o._toCounters(r, a), (n = o._toPattern(a)) < 0) return null;
        if ((t = o._patternToChar(n)) < 0) return null;
        u.push(t), e = r, r += i.a.sum(a), r = o._nextSet(o._row, r);
      } while ("*" !== t);

      return u.pop(), u.length && o._verifyEnd(e, r, a) && o._verifyChecksums(u) ? (u = u.slice(0, u.length - 2), null === (u = o._decodeExtended(u)) ? null : {
        code: u.join(""),
        start: c.start,
        end: r,
        startInfo: c,
        decodedCodes: u
      }) : null;
    }, r.prototype._verifyEnd = function (t, e) {
      return !(t === e || !this._row[e]);
    }, r.prototype._patternToChar = function (t) {
      var e,
          n = this;

      for (e = 0; e < n.CHARACTER_ENCODINGS.length; e++) {
        if (n.CHARACTER_ENCODINGS[e] === t) return String.fromCharCode(n.ALPHABET[e]);
      }

      return -1;
    }, r.prototype._toPattern = function (t) {
      for (var e = t.length, n = 0, r = 0, o = 0; o < e; o++) {
        r += t[o];
      }

      for (var i = 0; i < e; i++) {
        var a = Math.round(9 * t[i] / r);
        if (a < 1 || a > 4) return -1;
        if (0 == (1 & i)) for (var u = 0; u < a; u++) {
          n = n << 1 | 1;
        } else n <<= a;
      }

      return n;
    }, r.prototype._findStart = function () {
      var t,
          e,
          n,
          r = this,
          o = r._nextSet(r._row),
          i = o,
          a = [0, 0, 0, 0, 0, 0],
          u = 0,
          c = !1;

      for (t = o; t < r._row.length; t++) {
        if (r._row[t] ^ c) a[u]++;else {
          if (u === a.length - 1) {
            if (r._toPattern(a) === r.ASTERISK && (n = Math.floor(Math.max(0, i - (t - i) / 4)), r._matchRange(n, i, 0))) return {
              start: i,
              end: t
            };

            for (i += a[0] + a[1], e = 0; e < 4; e++) {
              a[e] = a[e + 2];
            }

            a[4] = 0, a[5] = 0, u--;
          } else u++;

          a[u] = 1, c = !c;
        }
      }

      return null;
    }, r.prototype._decodeExtended = function (t) {
      for (var e = t.length, n = [], r = 0; r < e; r++) {
        var o = t[r];

        if (o >= "a" && o <= "d") {
          if (r > e - 2) return null;
          var i = t[++r],
              a = i.charCodeAt(0),
              u = void 0;

          switch (o) {
            case "a":
              if (!(i >= "A" && i <= "Z")) return null;
              u = String.fromCharCode(a - 64);
              break;

            case "b":
              if (i >= "A" && i <= "E") u = String.fromCharCode(a - 38);else if (i >= "F" && i <= "J") u = String.fromCharCode(a - 11);else if (i >= "K" && i <= "O") u = String.fromCharCode(a + 16);else if (i >= "P" && i <= "S") u = String.fromCharCode(a + 43);else {
                if (!(i >= "T" && i <= "Z")) return null;
                u = String.fromCharCode(127);
              }
              break;

            case "c":
              if (i >= "A" && i <= "O") u = String.fromCharCode(a - 32);else {
                if ("Z" !== i) return null;
                u = ":";
              }
              break;

            case "d":
              if (!(i >= "A" && i <= "Z")) return null;
              u = String.fromCharCode(a + 32);
          }

          n.push(u);
        } else n.push(o);
      }

      return n;
    }, r.prototype._verifyChecksums = function (t) {
      return this._matchCheckChar(t, t.length - 2, 20) && this._matchCheckChar(t, t.length - 1, 15);
    }, r.prototype._matchCheckChar = function (t, e, n) {
      var r = this,
          o = t.slice(0, e),
          i = o.length,
          a = o.reduce(function (t, e, o) {
        return t + ((o * -1 + (i - 1)) % n + 1) * r.ALPHABET.indexOf(e.charCodeAt(0));
      }, 0);
      return this.ALPHABET[a % 47] === t[e].charCodeAt(0);
    }, e.a = r;
  }, function (t, e, n) {
    "use strict";

    function r() {
      o.a.call(this);
    }

    var o = n(4),
        i = {
      FORMAT: {
        value: "ean_2",
        writeable: !1
      }
    };
    r.prototype = Object.create(o.a.prototype, i), r.prototype.constructor = r, r.prototype.decode = function (t, e) {
      this._row = t;
      var n,
          r = 0,
          o = 0,
          i = e,
          a = this._row.length,
          u = [],
          c = [];

      for (o = 0; o < 2 && i < a; o++) {
        if (!(n = this._decodeCode(i))) return null;
        c.push(n), u.push(n.code % 10), n.code >= this.CODE_G_START && (r |= 1 << 1 - o), 1 != o && (i = this._nextSet(this._row, n.end), i = this._nextUnset(this._row, i));
      }

      return 2 != u.length || parseInt(u.join("")) % 4 !== r ? null : {
        code: u.join(""),
        decodedCodes: c,
        end: n.end
      };
    }, e.a = r;
  }, function (t, e, n) {
    "use strict";

    function r() {
      a.a.call(this);
    }

    function o(t) {
      var e;

      for (e = 0; e < 10; e++) {
        if (t === c[e]) return e;
      }

      return null;
    }

    function i(t) {
      var e,
          n = t.length,
          r = 0;

      for (e = n - 2; e >= 0; e -= 2) {
        r += t[e];
      }

      for (r *= 3, e = n - 1; e >= 0; e -= 2) {
        r += t[e];
      }

      return (r *= 3) % 10;
    }

    var a = n(4),
        u = {
      FORMAT: {
        value: "ean_5",
        writeable: !1
      }
    },
        c = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5];
    r.prototype = Object.create(a.a.prototype, u), r.prototype.constructor = r, r.prototype.decode = function (t, e) {
      this._row = t;
      var n,
          r = 0,
          a = 0,
          u = e,
          c = this._row.length,
          s = [],
          f = [];

      for (a = 0; a < 5 && u < c; a++) {
        if (!(n = this._decodeCode(u))) return null;
        f.push(n), s.push(n.code % 10), n.code >= this.CODE_G_START && (r |= 1 << 4 - a), 4 != a && (u = this._nextSet(this._row, n.end), u = this._nextUnset(this._row, u));
      }

      return 5 != s.length ? null : i(s) !== o(r) ? null : {
        code: s.join(""),
        decodedCodes: f,
        end: n.end
      };
    }, e.a = r;
  }, function (t, e, n) {
    "use strict";

    function r(t, e) {
      o.a.call(this, t, e);
    }

    var o = n(4),
        i = {
      FORMAT: {
        value: "ean_8",
        writeable: !1
      }
    };
    r.prototype = Object.create(o.a.prototype, i), r.prototype.constructor = r, r.prototype._decodePayload = function (t, e, n) {
      var r,
          o = this;

      for (r = 0; r < 4; r++) {
        if (!(t = o._decodeCode(t.end, o.CODE_G_START))) return null;
        e.push(t.code), n.push(t);
      }

      if (null === (t = o._findPattern(o.MIDDLE_PATTERN, t.end, !0, !1))) return null;

      for (n.push(t), r = 0; r < 4; r++) {
        if (!(t = o._decodeCode(t.end, o.CODE_G_START))) return null;
        n.push(t), e.push(t.code);
      }

      return t;
    }, e.a = r;
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      t = a()(o(), t), u.a.call(this, t), this.barSpaceRatio = [1, 1], t.normalizeBarSpaceWidth && (this.SINGLE_CODE_ERROR = .38, this.AVG_CODE_ERROR = .09);
    }

    function o() {
      var t = {};
      return Object.keys(r.CONFIG_KEYS).forEach(function (e) {
        t[e] = r.CONFIG_KEYS[e].default;
      }), t;
    }

    var i = n(28),
        a = n.n(i),
        u = n(1),
        c = 1,
        s = 3,
        f = {
      START_PATTERN: {
        value: [c, c, c, c]
      },
      STOP_PATTERN: {
        value: [c, c, s]
      },
      CODE_PATTERN: {
        value: [[c, c, s, s, c], [s, c, c, c, s], [c, s, c, c, s], [s, s, c, c, c], [c, c, s, c, s], [s, c, s, c, c], [c, s, s, c, c], [c, c, c, s, s], [s, c, c, s, c], [c, s, c, s, c]]
      },
      SINGLE_CODE_ERROR: {
        value: .78,
        writable: !0
      },
      AVG_CODE_ERROR: {
        value: .38,
        writable: !0
      },
      MAX_CORRECTION_FACTOR: {
        value: 5
      },
      FORMAT: {
        value: "i2of5"
      }
    };
    r.prototype = Object.create(u.a.prototype, f), r.prototype.constructor = r, r.prototype._matchPattern = function (t, e) {
      if (this.config.normalizeBarSpaceWidth) {
        var n,
            r = [0, 0],
            o = [0, 0],
            i = [0, 0],
            a = this.MAX_CORRECTION_FACTOR,
            c = 1 / a;

        for (n = 0; n < t.length; n++) {
          r[n % 2] += t[n], o[n % 2] += e[n];
        }

        for (i[0] = o[0] / r[0], i[1] = o[1] / r[1], i[0] = Math.max(Math.min(i[0], a), c), i[1] = Math.max(Math.min(i[1], a), c), this.barSpaceRatio = i, n = 0; n < t.length; n++) {
          t[n] *= this.barSpaceRatio[n % 2];
        }
      }

      return u.a.prototype._matchPattern.call(this, t, e);
    }, r.prototype._findPattern = function (t, e, n, r) {
      var o,
          i,
          a,
          u,
          c = [],
          s = this,
          f = 0,
          l = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0
      },
          d = s.AVG_CODE_ERROR;

      for (n = n || !1, r = r || !1, e || (e = s._nextSet(s._row)), o = 0; o < t.length; o++) {
        c[o] = 0;
      }

      for (o = e; o < s._row.length; o++) {
        if (s._row[o] ^ n) c[f]++;else {
          if (f === c.length - 1) {
            for (u = 0, a = 0; a < c.length; a++) {
              u += c[a];
            }

            if ((i = s._matchPattern(c, t)) < d) return l.error = i, l.start = o - u, l.end = o, l;
            if (!r) return null;

            for (a = 0; a < c.length - 2; a++) {
              c[a] = c[a + 2];
            }

            c[c.length - 2] = 0, c[c.length - 1] = 0, f--;
          } else f++;

          c[f] = 1, n = !n;
        }
      }

      return null;
    }, r.prototype._findStart = function () {
      for (var t, e, n = this, r = n._nextSet(n._row), o = 1; !e;) {
        if (!(e = n._findPattern(n.START_PATTERN, r, !1, !0))) return null;
        if (o = Math.floor((e.end - e.start) / 4), (t = e.start - 10 * o) >= 0 && n._matchRange(t, e.start, 0)) return e;
        r = e.end, e = null;
      }
    }, r.prototype._verifyTrailingWhitespace = function (t) {
      var e,
          n = this;
      return e = t.end + (t.end - t.start) / 2, e < n._row.length && n._matchRange(t.end, e, 0) ? t : null;
    }, r.prototype._findEnd = function () {
      var t,
          e,
          n = this;
      return n._row.reverse(), t = n._findPattern(n.STOP_PATTERN), n._row.reverse(), null === t ? null : (e = t.start, t.start = n._row.length - t.end, t.end = n._row.length - e, null !== t ? n._verifyTrailingWhitespace(t) : null);
    }, r.prototype._decodePair = function (t) {
      var e,
          n,
          r = [],
          o = this;

      for (e = 0; e < t.length; e++) {
        if (!(n = o._decodeCode(t[e]))) return null;
        r.push(n);
      }

      return r;
    }, r.prototype._decodeCode = function (t) {
      var e,
          n,
          r,
          o = this,
          i = 0,
          a = o.AVG_CODE_ERROR,
          u = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0
      };

      for (e = 0; e < t.length; e++) {
        i += t[e];
      }

      for (r = 0; r < o.CODE_PATTERN.length; r++) {
        (n = o._matchPattern(t, o.CODE_PATTERN[r])) < u.error && (u.code = r, u.error = n);
      }

      if (u.error < a) return u;
    }, r.prototype._decodePayload = function (t, e, n) {
      for (var r, o, i = this, a = 0, u = t.length, c = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]; a < u;) {
        for (r = 0; r < 5; r++) {
          c[0][r] = t[a] * this.barSpaceRatio[0], c[1][r] = t[a + 1] * this.barSpaceRatio[1], a += 2;
        }

        if (!(o = i._decodePair(c))) return null;

        for (r = 0; r < o.length; r++) {
          e.push(o[r].code + ""), n.push(o[r]);
        }
      }

      return o;
    }, r.prototype._verifyCounterLength = function (t) {
      return t.length % 10 == 0;
    }, r.prototype._decode = function () {
      var t,
          e,
          n,
          r = this,
          o = [],
          i = [];
      return (t = r._findStart()) ? (i.push(t), (e = r._findEnd()) ? (n = r._fillCounters(t.end, e.start, !1), r._verifyCounterLength(n) && r._decodePayload(n, o, i) ? o.length % 2 != 0 || o.length < 6 ? null : (i.push(e), {
        code: o.join(""),
        start: t.start,
        end: e.end,
        startInfo: t,
        decodedCodes: i
      }) : null) : null) : null;
    }, r.CONFIG_KEYS = {
      normalizeBarSpaceWidth: {
        type: "boolean",
        default: !1,
        description: "If true, the reader tries to normalize thewidth-difference between bars and spaces"
      }
    }, e.a = r;
  }, function (t, e, n) {
    "use strict";

    function r(t, e) {
      o.a.call(this, t, e);
    }

    var o = n(4),
        i = {
      CODE_FREQUENCY: {
        value: [[56, 52, 50, 49, 44, 38, 35, 42, 41, 37], [7, 11, 13, 14, 19, 25, 28, 21, 22, 26]]
      },
      STOP_PATTERN: {
        value: [1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7]
      },
      FORMAT: {
        value: "upc_e",
        writeable: !1
      }
    };
    r.prototype = Object.create(o.a.prototype, i), r.prototype.constructor = r, r.prototype._decodePayload = function (t, e, n) {
      var r,
          o = this,
          i = 0;

      for (r = 0; r < 6; r++) {
        if (!(t = o._decodeCode(t.end))) return null;
        t.code >= o.CODE_G_START && (t.code = t.code - o.CODE_G_START, i |= 1 << 5 - r), e.push(t.code), n.push(t);
      }

      return o._determineParity(i, e) ? t : null;
    }, r.prototype._determineParity = function (t, e) {
      var n, r;

      for (r = 0; r < this.CODE_FREQUENCY.length; r++) {
        for (n = 0; n < this.CODE_FREQUENCY[r].length; n++) {
          if (t === this.CODE_FREQUENCY[r][n]) return e.unshift(r), e.push(n), !0;
        }
      }

      return !1;
    }, r.prototype._convertToUPCA = function (t) {
      var e = [t[0]],
          n = t[t.length - 2];
      return e = n <= 2 ? e.concat(t.slice(1, 3)).concat([n, 0, 0, 0, 0]).concat(t.slice(3, 6)) : 3 === n ? e.concat(t.slice(1, 4)).concat([0, 0, 0, 0, 0]).concat(t.slice(4, 6)) : 4 === n ? e.concat(t.slice(1, 5)).concat([0, 0, 0, 0, 0, t[5]]) : e.concat(t.slice(1, 6)).concat([0, 0, 0, 0, n]), e.push(t[t.length - 1]), e;
    }, r.prototype._checksum = function (t) {
      return o.a.prototype._checksum.call(this, this._convertToUPCA(t));
    }, r.prototype._findEnd = function (t, e) {
      return e = !0, o.a.prototype._findEnd.call(this, t, e);
    }, r.prototype._verifyTrailingWhitespace = function (t) {
      var e,
          n = this;
      if ((e = t.end + (t.end - t.start) / 2) < n._row.length && n._matchRange(t.end, e, 0)) return t;
    }, e.a = r;
  }, function (t, e, n) {
    "use strict";

    function r(t, e) {
      o.a.call(this, t, e);
    }

    var o = n(4),
        i = {
      FORMAT: {
        value: "upc_a",
        writeable: !1
      }
    };
    r.prototype = Object.create(o.a.prototype, i), r.prototype.constructor = r, r.prototype._decode = function () {
      var t = o.a.prototype._decode.call(this);

      return t && t.code && 13 === t.code.length && "0" === t.code.charAt(0) ? (t.code = t.code.substring(1), t) : null;
    }, e.a = r;
  }, function (t, e) {
    function n(t, e) {
      return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
    }

    t.exports = n;
  }, function (t, e) {
    function n() {
      var t = new Float32Array(4);
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t;
    }

    t.exports = n;
  }, function (t, e) {
    function n(t, e) {
      var n = e[0],
          r = e[1],
          o = e[2],
          i = e[3],
          a = n * i - o * r;
      return a ? (a = 1 / a, t[0] = i * a, t[1] = -r * a, t[2] = -o * a, t[3] = n * a, t) : null;
    }

    t.exports = n;
  }, function (t, e) {
    function n(t, e, n) {
      return t[0] = e[0] * n, t[1] = e[1] * n, t;
    }

    t.exports = n;
  }, function (t, e) {
    function n(t, e, n) {
      var r = e[0],
          o = e[1];
      return t[0] = n[0] * r + n[2] * o, t[1] = n[1] * r + n[3] * o, t;
    }

    t.exports = n;
  }, function (t, e) {
    function n(t) {
      var e = new Float32Array(3);
      return e[0] = t[0], e[1] = t[1], e[2] = t[2], e;
    }

    t.exports = n;
  }, function (t, e, n) {
    function r(t) {
      var e = -1,
          n = null == t ? 0 : t.length;

      for (this.clear(); ++e < n;) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }

    var o = n(122),
        i = n(123),
        a = n(124),
        u = n(125),
        c = n(126);
    r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = a, r.prototype.has = u, r.prototype.set = c, t.exports = r;
  }, function (t, e, n) {
    function r(t) {
      var e = this.__data__ = new o(t);
      this.size = e.size;
    }

    var o = n(10),
        i = n(149),
        a = n(150),
        u = n(151),
        c = n(152),
        s = n(153);
    r.prototype.clear = i, r.prototype.delete = a, r.prototype.get = u, r.prototype.has = c, r.prototype.set = s, t.exports = r;
  }, function (t, e, n) {
    var r = n(5),
        o = r.Uint8Array;
    t.exports = o;
  }, function (t, e) {
    function n(t, e, n) {
      switch (n.length) {
        case 0:
          return t.call(e);

        case 1:
          return t.call(e, n[0]);

        case 2:
          return t.call(e, n[0], n[1]);

        case 3:
          return t.call(e, n[0], n[1], n[2]);
      }

      return t.apply(e, n);
    }

    t.exports = n;
  }, function (t, e, n) {
    function r(t, e) {
      var n = a(t),
          r = !n && i(t),
          f = !n && !r && u(t),
          d = !n && !r && !f && s(t),
          h = n || r || f || d,
          p = h ? o(t.length, String) : [],
          v = p.length;

      for (var _ in t) {
        !e && !l.call(t, _) || h && ("length" == _ || f && ("offset" == _ || "parent" == _) || d && ("buffer" == _ || "byteLength" == _ || "byteOffset" == _) || c(_, v)) || p.push(_);
      }

      return p;
    }

    var o = n(107),
        i = n(18),
        a = n(2),
        u = n(44),
        c = n(15),
        s = n(45),
        f = Object.prototype,
        l = f.hasOwnProperty;
    t.exports = r;
  }, function (t, e) {
    function n(t, e) {
      for (var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r;) {
        o[n] = e(t[n], n, t);
      }

      return o;
    }

    t.exports = n;
  }, function (t, e) {
    function n(t, e) {
      for (var n = -1, r = e.length, o = t.length; ++n < r;) {
        t[o + n] = e[n];
      }

      return t;
    }

    t.exports = n;
  }, function (t, e, n) {
    var r = n(0),
        o = Object.create,
        i = function () {
      function t() {}

      return function (e) {
        if (!r(e)) return {};
        if (o) return o(e);
        t.prototype = e;
        var n = new t();
        return t.prototype = void 0, n;
      };
    }();

    t.exports = i;
  }, function (t, e, n) {
    function r(t, e, n, a, u) {
      var c = -1,
          s = t.length;

      for (n || (n = i), u || (u = []); ++c < s;) {
        var f = t[c];
        e > 0 && n(f) ? e > 1 ? r(f, e - 1, n, a, u) : o(u, f) : a || (u[u.length] = f);
      }

      return u;
    }

    var o = n(90),
        i = n(128);
    t.exports = r;
  }, function (t, e, n) {
    var r = n(117),
        o = r();
    t.exports = o;
  }, function (t, e, n) {
    function r(t, e) {
      e = o(e, t);

      for (var n = 0, r = e.length; null != t && n < r;) {
        t = t[i(e[n++])];
      }

      return n && n == r ? t : void 0;
    }

    var o = n(13),
        i = n(23);
    t.exports = r;
  }, function (t, e) {
    function n(t, e) {
      return null != t && e in Object(t);
    }

    t.exports = n;
  }, function (t, e, n) {
    function r(t) {
      return i(t) && o(t) == a;
    }

    var o = n(8),
        i = n(6),
        a = "[object Arguments]";
    t.exports = r;
  }, function (t, e, n) {
    function r(t) {
      return !(!a(t) || i(t)) && (o(t) ? p : s).test(u(t));
    }

    var o = n(25),
        i = n(132),
        a = n(0),
        u = n(155),
        c = /[\\^$.*+?()[\]{}|]/g,
        s = /^\[object .+?Constructor\]$/,
        f = Function.prototype,
        l = Object.prototype,
        d = f.toString,
        h = l.hasOwnProperty,
        p = RegExp("^" + d.call(h).replace(c, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = r;
  }, function (t, e, n) {
    function r(t) {
      return a(t) && i(t.length) && !!u[o(t)];
    }

    var o = n(8),
        i = n(26),
        a = n(6),
        u = {};
    u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0, u["[object Arguments]"] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u["[object Function]"] = u["[object Map]"] = u["[object Number]"] = u["[object Object]"] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1, t.exports = r;
  }, function (t, e, n) {
    function r(t) {
      if (!o(t)) return a(t);
      var e = i(t),
          n = [];

      for (var r in t) {
        ("constructor" != r || !e && c.call(t, r)) && n.push(r);
      }

      return n;
    }

    var o = n(0),
        i = n(40),
        a = n(144),
        u = Object.prototype,
        c = u.hasOwnProperty;
    t.exports = r;
  }, function (t, e, n) {
    function r(t, e, n, f, l) {
      t !== e && a(e, function (a, s) {
        if (c(a)) l || (l = new o()), u(t, e, s, n, r, f, l);else {
          var d = f ? f(t[s], a, s + "", t, e, l) : void 0;
          void 0 === d && (d = a), i(t, s, d);
        }
      }, s);
    }

    var o = n(85),
        i = n(35),
        a = n(93),
        u = n(101),
        c = n(0),
        s = n(46);
    t.exports = r;
  }, function (t, e, n) {
    function r(t, e, n, r, y, m, x) {
      var b = t[n],
          E = e[n],
          C = x.get(E);
      if (C) return void o(t, n, C);
      var O = m ? m(b, E, n + "", t, e, x) : void 0,
          A = void 0 === O;

      if (A) {
        var R = f(E),
            w = !R && d(E),
            T = !R && !w && _(E);

        O = E, R || w || T ? f(b) ? O = b : l(b) ? O = u(b) : w ? (A = !1, O = i(E, !0)) : T ? (A = !1, O = a(E, !0)) : O = [] : v(E) || s(E) ? (O = b, s(b) ? O = g(b) : (!p(b) || r && h(b)) && (O = c(E))) : A = !1;
      }

      A && (x.set(E, O), y(O, E, r, m, x), x.delete(E)), o(t, n, O);
    }

    var o = n(35),
        i = n(111),
        a = n(112),
        u = n(113),
        c = n(127),
        s = n(18),
        f = n(2),
        l = n(159),
        d = n(44),
        h = n(25),
        p = n(0),
        v = n(160),
        _ = n(45),
        g = n(164);

    t.exports = r;
  }, function (t, e, n) {
    function r(t, e) {
      return o(t, e, function (e, n) {
        return i(t, n);
      });
    }

    var o = n(103),
        i = n(158);
    t.exports = r;
  }, function (t, e, n) {
    function r(t, e, n) {
      for (var r = -1, u = e.length, c = {}; ++r < u;) {
        var s = e[r],
            f = o(t, s);
        n(f, s) && i(c, a(s, t), f);
      }

      return c;
    }

    var o = n(94),
        i = n(105),
        a = n(13);
    t.exports = r;
  }, function (t, e, n) {
    function r(t, e) {
      return a(i(t, e, o), t + "");
    }

    var o = n(43),
        i = n(41),
        a = n(42);
    t.exports = r;
  }, function (t, e, n) {
    function r(t, e, n, r) {
      if (!u(t)) return t;
      e = i(e, t);

      for (var s = -1, f = e.length, l = f - 1, d = t; null != d && ++s < f;) {
        var h = c(e[s]),
            p = n;

        if (s != l) {
          var v = d[h];
          p = r ? r(v, h, d) : void 0, void 0 === p && (p = u(v) ? v : a(e[s + 1]) ? [] : {});
        }

        o(d, h, p), d = d[h];
      }

      return t;
    }

    var o = n(36),
        i = n(13),
        a = n(15),
        u = n(0),
        c = n(23);
    t.exports = r;
  }, function (t, e, n) {
    var r = n(156),
        o = n(37),
        i = n(43),
        a = o ? function (t, e) {
      return o(t, "toString", {
        configurable: !0,
        enumerable: !1,
        value: r(e),
        writable: !0
      });
    } : i;
    t.exports = a;
  }, function (t, e) {
    function n(t, e) {
      for (var n = -1, r = Array(t); ++n < t;) {
        r[n] = e(n);
      }

      return r;
    }

    t.exports = n;
  }, function (t, e, n) {
    function r(t) {
      if ("string" == typeof t) return t;
      if (a(t)) return i(t, r) + "";
      if (u(t)) return f ? f.call(t) : "";
      var e = t + "";
      return "0" == e && 1 / t == -c ? "-0" : e;
    }

    var o = n(11),
        i = n(89),
        a = n(2),
        u = n(27),
        c = 1 / 0,
        s = o ? o.prototype : void 0,
        f = s ? s.toString : void 0;
    t.exports = r;
  }, function (t, e) {
    function n(t) {
      return function (e) {
        return t(e);
      };
    }

    t.exports = n;
  }, function (t, e, n) {
    function r(t) {
      var e = new t.constructor(t.byteLength);
      return new o(e).set(new o(t)), e;
    }

    var o = n(86);
    t.exports = r;
  }, function (t, e, n) {
    (function (t) {
      function r(t, e) {
        if (e) return t.slice();
        var n = t.length,
            r = s ? s(n) : new t.constructor(n);
        return t.copy(r), r;
      }

      var o = n(5),
          i = "object" == typeof e && e && !e.nodeType && e,
          a = i && "object" == typeof t && t && !t.nodeType && t,
          u = a && a.exports === i,
          c = u ? o.Buffer : void 0,
          s = c ? c.allocUnsafe : void 0;
      t.exports = r;
    }).call(e, n(29)(t));
  }, function (t, e, n) {
    function r(t, e) {
      var n = e ? o(t.buffer) : t.buffer;
      return new t.constructor(n, t.byteOffset, t.length);
    }

    var o = n(110);
    t.exports = r;
  }, function (t, e) {
    function n(t, e) {
      var n = -1,
          r = t.length;

      for (e || (e = Array(r)); ++n < r;) {
        e[n] = t[n];
      }

      return e;
    }

    t.exports = n;
  }, function (t, e, n) {
    function r(t, e, n, r) {
      var a = !n;
      n || (n = {});

      for (var u = -1, c = e.length; ++u < c;) {
        var s = e[u],
            f = r ? r(n[s], t[s], s, n, t) : void 0;
        void 0 === f && (f = t[s]), a ? i(n, s, f) : o(n, s, f);
      }

      return n;
    }

    var o = n(36),
        i = n(21);
    t.exports = r;
  }, function (t, e, n) {
    var r = n(5),
        o = r["__core-js_shared__"];
    t.exports = o;
  }, function (t, e, n) {
    function r(t) {
      return o(function (e, n) {
        var r = -1,
            o = n.length,
            a = o > 1 ? n[o - 1] : void 0,
            u = o > 2 ? n[2] : void 0;

        for (a = t.length > 3 && "function" == typeof a ? (o--, a) : void 0, u && i(n[0], n[1], u) && (a = o < 3 ? void 0 : a, o = 1), e = Object(e); ++r < o;) {
          var c = n[r];
          c && t(e, c, r, a);
        }

        return e;
      });
    }

    var o = n(104),
        i = n(129);
    t.exports = r;
  }, function (t, e) {
    function n(t) {
      return function (e, n, r) {
        for (var o = -1, i = Object(e), a = r(e), u = a.length; u--;) {
          var c = a[t ? u : ++o];
          if (n(i[c], c, i) === !1) break;
        }

        return e;
      };
    }

    t.exports = n;
  }, function (t, e, n) {
    function r(t) {
      return a(i(t, void 0, o), t + "");
    }

    var o = n(157),
        i = n(41),
        a = n(42);
    t.exports = r;
  }, function (t, e, n) {
    function r(t) {
      var e = a.call(t, c),
          n = t[c];

      try {
        t[c] = void 0;
        var r = !0;
      } catch (t) {}

      var o = u.call(t);
      return r && (e ? t[c] = n : delete t[c]), o;
    }

    var o = n(11),
        i = Object.prototype,
        a = i.hasOwnProperty,
        u = i.toString,
        c = o ? o.toStringTag : void 0;
    t.exports = r;
  }, function (t, e) {
    function n(t, e) {
      return null == t ? void 0 : t[e];
    }

    t.exports = n;
  }, function (t, e, n) {
    function r(t, e, n) {
      e = o(e, t);

      for (var r = -1, f = e.length, l = !1; ++r < f;) {
        var d = s(e[r]);
        if (!(l = null != t && n(t, d))) break;
        t = t[d];
      }

      return l || ++r != f ? l : !!(f = null == t ? 0 : t.length) && c(f) && u(d, f) && (a(t) || i(t));
    }

    var o = n(13),
        i = n(18),
        a = n(2),
        u = n(15),
        c = n(26),
        s = n(23);
    t.exports = r;
  }, function (t, e, n) {
    function r() {
      this.__data__ = o ? o(null) : {}, this.size = 0;
    }

    var o = n(16);
    t.exports = r;
  }, function (t, e) {
    function n(t) {
      var e = this.has(t) && delete this.__data__[t];
      return this.size -= e ? 1 : 0, e;
    }

    t.exports = n;
  }, function (t, e, n) {
    function r(t) {
      var e = this.__data__;

      if (o) {
        var n = e[t];
        return n === i ? void 0 : n;
      }

      return u.call(e, t) ? e[t] : void 0;
    }

    var o = n(16),
        i = "__lodash_hash_undefined__",
        a = Object.prototype,
        u = a.hasOwnProperty;
    t.exports = r;
  }, function (t, e, n) {
    function r(t) {
      var e = this.__data__;
      return o ? void 0 !== e[t] : a.call(e, t);
    }

    var o = n(16),
        i = Object.prototype,
        a = i.hasOwnProperty;
    t.exports = r;
  }, function (t, e, n) {
    function r(t, e) {
      var n = this.__data__;
      return this.size += this.has(t) ? 0 : 1, n[t] = o && void 0 === e ? i : e, this;
    }

    var o = n(16),
        i = "__lodash_hash_undefined__";
    t.exports = r;
  }, function (t, e, n) {
    function r(t) {
      return "function" != typeof t.constructor || a(t) ? {} : o(i(t));
    }

    var o = n(91),
        i = n(39),
        a = n(40);
    t.exports = r;
  }, function (t, e, n) {
    function r(t) {
      return a(t) || i(t) || !!(u && t && t[u]);
    }

    var o = n(11),
        i = n(18),
        a = n(2),
        u = o ? o.isConcatSpreadable : void 0;
    t.exports = r;
  }, function (t, e, n) {
    function r(t, e, n) {
      if (!u(n)) return !1;
      var r = typeof e;
      return !!("number" == r ? i(n) && a(e, n.length) : "string" == r && e in n) && o(n[e], t);
    }

    var o = n(17),
        i = n(24),
        a = n(15),
        u = n(0);
    t.exports = r;
  }, function (t, e, n) {
    function r(t, e) {
      if (o(t)) return !1;
      var n = typeof t;
      return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || u.test(t) || !a.test(t) || null != e && t in Object(e);
    }

    var o = n(2),
        i = n(27),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        u = /^\w*$/;
    t.exports = r;
  }, function (t, e) {
    function n(t) {
      var e = typeof t;
      return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
    }

    t.exports = n;
  }, function (t, e, n) {
    function r(t) {
      return !!i && i in t;
    }

    var o = n(115),
        i = function () {
      var t = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "");
      return t ? "Symbol(src)_1." + t : "";
    }();

    t.exports = r;
  }, function (t, e) {
    function n() {
      this.__data__ = [], this.size = 0;
    }

    t.exports = n;
  }, function (t, e, n) {
    function r(t) {
      var e = this.__data__,
          n = o(e, t);
      return !(n < 0) && (n == e.length - 1 ? e.pop() : a.call(e, n, 1), --this.size, !0);
    }

    var o = n(12),
        i = Array.prototype,
        a = i.splice;
    t.exports = r;
  }, function (t, e, n) {
    function r(t) {
      var e = this.__data__,
          n = o(e, t);
      return n < 0 ? void 0 : e[n][1];
    }

    var o = n(12);
    t.exports = r;
  }, function (t, e, n) {
    function r(t) {
      return o(this.__data__, t) > -1;
    }

    var o = n(12);
    t.exports = r;
  }, function (t, e, n) {
    function r(t, e) {
      var n = this.__data__,
          r = o(n, t);
      return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
    }

    var o = n(12);
    t.exports = r;
  }, function (t, e, n) {
    function r() {
      this.size = 0, this.__data__ = {
        hash: new o(),
        map: new (a || i)(),
        string: new o()
      };
    }

    var o = n(84),
        i = n(10),
        a = n(33);
    t.exports = r;
  }, function (t, e, n) {
    function r(t) {
      var e = o(this, t).delete(t);
      return this.size -= e ? 1 : 0, e;
    }

    var o = n(14);
    t.exports = r;
  }, function (t, e, n) {
    function r(t) {
      return o(this, t).get(t);
    }

    var o = n(14);
    t.exports = r;
  }, function (t, e, n) {
    function r(t) {
      return o(this, t).has(t);
    }

    var o = n(14);
    t.exports = r;
  }, function (t, e, n) {
    function r(t, e) {
      var n = o(this, t),
          r = n.size;
      return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
    }

    var o = n(14);
    t.exports = r;
  }, function (t, e, n) {
    function r(t) {
      var e = o(t, function (t) {
        return n.size === i && n.clear(), t;
      }),
          n = e.cache;
      return e;
    }

    var o = n(161),
        i = 500;
    t.exports = r;
  }, function (t, e) {
    function n(t) {
      var e = [];
      if (null != t) for (var n in Object(t)) {
        e.push(n);
      }
      return e;
    }

    t.exports = n;
  }, function (t, e, n) {
    (function (t) {
      var r = n(38),
          o = "object" == typeof e && e && !e.nodeType && e,
          i = o && "object" == typeof t && t && !t.nodeType && t,
          a = i && i.exports === o,
          u = a && r.process,
          c = function () {
        try {
          return u && u.binding && u.binding("util");
        } catch (t) {}
      }();

      t.exports = c;
    }).call(e, n(29)(t));
  }, function (t, e) {
    function n(t) {
      return o.call(t);
    }

    var r = Object.prototype,
        o = r.toString;
    t.exports = n;
  }, function (t, e) {
    function n(t, e) {
      return function (n) {
        return t(e(n));
      };
    }

    t.exports = n;
  }, function (t, e) {
    function n(t) {
      var e = 0,
          n = 0;
      return function () {
        var a = i(),
            u = o - (a - n);

        if (n = a, u > 0) {
          if (++e >= r) return arguments[0];
        } else e = 0;

        return t.apply(void 0, arguments);
      };
    }

    var r = 800,
        o = 16,
        i = Date.now;
    t.exports = n;
  }, function (t, e, n) {
    function r() {
      this.__data__ = new o(), this.size = 0;
    }

    var o = n(10);
    t.exports = r;
  }, function (t, e) {
    function n(t) {
      var e = this.__data__,
          n = e.delete(t);
      return this.size = e.size, n;
    }

    t.exports = n;
  }, function (t, e) {
    function n(t) {
      return this.__data__.get(t);
    }

    t.exports = n;
  }, function (t, e) {
    function n(t) {
      return this.__data__.has(t);
    }

    t.exports = n;
  }, function (t, e, n) {
    function r(t, e) {
      var n = this.__data__;

      if (n instanceof o) {
        var r = n.__data__;
        if (!i || r.length < u - 1) return r.push([t, e]), this.size = ++n.size, this;
        n = this.__data__ = new a(r);
      }

      return n.set(t, e), this.size = n.size, this;
    }

    var o = n(10),
        i = n(33),
        a = n(34),
        u = 200;
    t.exports = r;
  }, function (t, e, n) {
    var r = n(143),
        o = /^\./,
        i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        a = /\\(\\)?/g,
        u = r(function (t) {
      var e = [];
      return o.test(t) && e.push(""), t.replace(i, function (t, n, r, o) {
        e.push(r ? o.replace(a, "$1") : n || t);
      }), e;
    });
    t.exports = u;
  }, function (t, e) {
    function n(t) {
      if (null != t) {
        try {
          return o.call(t);
        } catch (t) {}

        try {
          return t + "";
        } catch (t) {}
      }

      return "";
    }

    var r = Function.prototype,
        o = r.toString;
    t.exports = n;
  }, function (t, e) {
    function n(t) {
      return function () {
        return t;
      };
    }

    t.exports = n;
  }, function (t, e, n) {
    function r(t) {
      return (null == t ? 0 : t.length) ? o(t, 1) : [];
    }

    var o = n(92);
    t.exports = r;
  }, function (t, e, n) {
    function r(t, e) {
      return null != t && i(t, e, o);
    }

    var o = n(95),
        i = n(121);
    t.exports = r;
  }, function (t, e, n) {
    function r(t) {
      return i(t) && o(t);
    }

    var o = n(24),
        i = n(6);
    t.exports = r;
  }, function (t, e, n) {
    function r(t) {
      if (!a(t) || o(t) != u) return !1;
      var e = i(t);
      if (null === e) return !0;
      var n = l.call(e, "constructor") && e.constructor;
      return "function" == typeof n && n instanceof n && f.call(n) == d;
    }

    var o = n(8),
        i = n(39),
        a = n(6),
        u = "[object Object]",
        c = Function.prototype,
        s = Object.prototype,
        f = c.toString,
        l = s.hasOwnProperty,
        d = f.call(Object);
    t.exports = r;
  }, function (t, e, n) {
    function r(t, e) {
      if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);

      var n = function n() {
        var r = arguments,
            o = e ? e.apply(this, r) : r[0],
            i = n.cache;
        if (i.has(o)) return i.get(o);
        var a = t.apply(this, r);
        return n.cache = i.set(o, a) || i, a;
      };

      return n.cache = new (r.Cache || o)(), n;
    }

    var o = n(34),
        i = "Expected a function";
    r.Cache = o, t.exports = r;
  }, function (t, e, n) {
    var r = n(102),
        o = n(118),
        i = o(function (t, e) {
      return null == t ? {} : r(t, e);
    });
    t.exports = i;
  }, function (t, e) {
    function n() {
      return !1;
    }

    t.exports = n;
  }, function (t, e, n) {
    function r(t) {
      return o(t, i(t));
    }

    var o = n(114),
        i = n(46);
    t.exports = r;
  }, function (t, e, n) {
    function r(t) {
      return null == t ? "" : o(t);
    }

    var o = n(108);
    t.exports = r;
  }, function (t, e, n) {
    t.exports = n(48);
  }]);
});

/***/ }),

/***/ "lVut":
/*!*****************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/utils.js ***!
  \*****************************************************/
/*! exports provided: extractVersion, wrapPeerConnectionEvent, disableLog, disableWarnings, log, deprecated, detectBrowser, compactObject, walkStats, filterStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractVersion", function() { return extractVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapPeerConnectionEvent", function() { return wrapPeerConnectionEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableLog", function() { return disableLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableWarnings", function() { return disableWarnings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecated", function() { return deprecated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectBrowser", function() { return detectBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compactObject", function() { return compactObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walkStats", function() { return walkStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterStats", function() { return filterStats; });
/* harmony import */ var C_Users_admin_Desktop_testAgain_master_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "rePB");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */



var logDisabled_ = true;
var deprecationWarnings_ = true;
/**
 * Extract browser version out of the provided user agent string.
 *
 * @param {!string} uastring userAgent string.
 * @param {!string} expr Regular expression used as match criteria.
 * @param {!number} pos position in the version string to be returned.
 * @return {!number} browser version.
 */

function extractVersion(uastring, expr, pos) {
  var match = uastring.match(expr);
  return match && match.length >= pos && parseInt(match[pos], 10);
} // Wraps the peerconnection event eventNameToWrap in a function
// which returns the modified event object (or false to prevent
// the event).

function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
  if (!window.RTCPeerConnection) {
    return;
  }

  var proto = window.RTCPeerConnection.prototype;
  var nativeAddEventListener = proto.addEventListener;

  proto.addEventListener = function (nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap) {
      return nativeAddEventListener.apply(this, arguments);
    }

    var wrappedCallback = function wrappedCallback(e) {
      var modifiedEvent = wrapper(e);

      if (modifiedEvent) {
        if (cb.handleEvent) {
          cb.handleEvent(modifiedEvent);
        } else {
          cb(modifiedEvent);
        }
      }
    };

    this._eventMap = this._eventMap || {};

    if (!this._eventMap[eventNameToWrap]) {
      this._eventMap[eventNameToWrap] = new Map();
    }

    this._eventMap[eventNameToWrap].set(cb, wrappedCallback);

    return nativeAddEventListener.apply(this, [nativeEventName, wrappedCallback]);
  };

  var nativeRemoveEventListener = proto.removeEventListener;

  proto.removeEventListener = function (nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[eventNameToWrap]) {
      return nativeRemoveEventListener.apply(this, arguments);
    }

    if (!this._eventMap[eventNameToWrap].has(cb)) {
      return nativeRemoveEventListener.apply(this, arguments);
    }

    var unwrappedCb = this._eventMap[eventNameToWrap].get(cb);

    this._eventMap[eventNameToWrap].delete(cb);

    if (this._eventMap[eventNameToWrap].size === 0) {
      delete this._eventMap[eventNameToWrap];
    }

    if (Object.keys(this._eventMap).length === 0) {
      delete this._eventMap;
    }

    return nativeRemoveEventListener.apply(this, [nativeEventName, unwrappedCb]);
  };

  Object.defineProperty(proto, 'on' + eventNameToWrap, {
    get: function get() {
      return this['_on' + eventNameToWrap];
    },
    set: function set(cb) {
      if (this['_on' + eventNameToWrap]) {
        this.removeEventListener(eventNameToWrap, this['_on' + eventNameToWrap]);
        delete this['_on' + eventNameToWrap];
      }

      if (cb) {
        this.addEventListener(eventNameToWrap, this['_on' + eventNameToWrap] = cb);
      }
    },
    enumerable: true,
    configurable: true
  });
}
function disableLog(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + typeof bool + '. Please use a boolean.');
  }

  logDisabled_ = bool;
  return bool ? 'adapter.js logging disabled' : 'adapter.js logging enabled';
}
/**
 * Disable or enable deprecation warnings
 * @param {!boolean} bool set to true to disable warnings.
 */

function disableWarnings(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + typeof bool + '. Please use a boolean.');
  }

  deprecationWarnings_ = !bool;
  return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
}
function log() {
  if (typeof window === 'object') {
    if (logDisabled_) {
      return;
    }

    if (typeof console !== 'undefined' && typeof console.log === 'function') {
      console.log.apply(console, arguments);
    }
  }
}
/**
 * Shows a deprecation warning suggesting the modern and spec-compatible API.
 */

function deprecated(oldMethod, newMethod) {
  if (!deprecationWarnings_) {
    return;
  }

  console.warn(oldMethod + ' is deprecated, please use ' + newMethod + ' instead.');
}
/**
 * Browser detector.
 *
 * @return {object} result containing browser and version
 *     properties.
 */

function detectBrowser(window) {
  // Returned result object.
  var result = {
    browser: null,
    version: null
  }; // Fail early if it's not a browser

  if (typeof window === 'undefined' || !window.navigator) {
    result.browser = 'Not a browser.';
    return result;
  }

  var navigator = window.navigator;

  if (navigator.mozGetUserMedia) {
    // Firefox.
    result.browser = 'firefox';
    result.version = extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1);
  } else if (navigator.webkitGetUserMedia || window.isSecureContext === false && window.webkitRTCPeerConnection && !window.RTCIceGatherer) {
    // Chrome, Chromium, Webview, Opera.
    // Version matches Chrome/WebRTC version.
    // Chrome 74 removed webkitGetUserMedia on http as well so we need the
    // more complicated fallback to webkitRTCPeerConnection.
    result.browser = 'chrome';
    result.version = extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
  } else if (navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
    // Edge.
    result.browser = 'edge';
    result.version = extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2);
  } else if (window.RTCPeerConnection && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
    // Safari.
    result.browser = 'safari';
    result.version = extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
    result.supportsUnifiedPlan = window.RTCRtpTransceiver && 'currentDirection' in window.RTCRtpTransceiver.prototype;
  } else {
    // Default fallthrough: not supported.
    result.browser = 'Not a supported browser.';
    return result;
  }

  return result;
}
/**
 * Checks if something is an object.
 *
 * @param {*} val The something you want to check.
 * @return true if val is an object, false otherwise.
 */

function isObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]';
}
/**
 * Remove all empty objects and undefined values
 * from a nested object -- an enhanced and vanilla version
 * of Lodash's `compact`.
 */


function compactObject(data) {
  if (!isObject(data)) {
    return data;
  }

  return Object.keys(data).reduce(function (accumulator, key) {
    var isObj = isObject(data[key]);
    var value = isObj ? compactObject(data[key]) : data[key];
    var isEmptyObject = isObj && !Object.keys(value).length;

    if (value === undefined || isEmptyObject) {
      return accumulator;
    }

    return Object.assign(accumulator, Object(C_Users_admin_Desktop_testAgain_master_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, value));
  }, {});
}
/* iterates the stats graph recursively. */

function walkStats(stats, base, resultSet) {
  if (!base || resultSet.has(base.id)) {
    return;
  }

  resultSet.set(base.id, base);
  Object.keys(base).forEach(function (name) {
    if (name.endsWith('Id')) {
      walkStats(stats, stats.get(base[name]), resultSet);
    } else if (name.endsWith('Ids')) {
      base[name].forEach(function (id) {
        walkStats(stats, stats.get(id), resultSet);
      });
    }
  });
}
/* filter getStats for a sender/receiver track. */

function filterStats(result, track, outbound) {
  var streamStatsType = outbound ? 'outbound-rtp' : 'inbound-rtp';
  var filteredResult = new Map();

  if (track === null) {
    return filteredResult;
  }

  var trackStats = [];
  result.forEach(function (value) {
    if (value.type === 'track' && value.trackIdentifier === track.id) {
      trackStats.push(value);
    }
  });
  trackStats.forEach(function (trackStat) {
    result.forEach(function (stats) {
      if (stats.type === streamStatsType && stats.trackId === trackStat.id) {
        walkStats(result, stats, filteredResult);
      }
    });
  });
  return filteredResult;
}

/***/ }),

/***/ "pXin":
/*!********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/firefox/getusermedia.js ***!
  \********************************************************************/
/*! exports provided: shimGetUserMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return shimGetUserMedia; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "lVut");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */



function shimGetUserMedia(window) {
  var browserDetails = _utils__WEBPACK_IMPORTED_MODULE_0__["detectBrowser"](window);
  var navigator = window && window.navigator;
  var MediaStreamTrack = window && window.MediaStreamTrack;

  navigator.getUserMedia = function (constraints, onSuccess, onError) {
    // Replace Firefox 44+'s deprecation warning with unprefixed version.
    _utils__WEBPACK_IMPORTED_MODULE_0__["deprecated"]('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia');
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  };

  if (!(browserDetails.version > 55 && 'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
    var remap = function remap(obj, a, b) {
      if (a in obj && !(b in obj)) {
        obj[b] = obj[a];
        delete obj[a];
      }
    };

    var nativeGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);

    navigator.mediaDevices.getUserMedia = function (c) {
      if (typeof c === 'object' && typeof c.audio === 'object') {
        c = JSON.parse(JSON.stringify(c));
        remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
        remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
      }

      return nativeGetUserMedia(c);
    };

    if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
      var nativeGetSettings = MediaStreamTrack.prototype.getSettings;

      MediaStreamTrack.prototype.getSettings = function () {
        var obj = nativeGetSettings.apply(this, arguments);
        remap(obj, 'mozAutoGainControl', 'autoGainControl');
        remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
        return obj;
      };
    }

    if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
      var nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;

      MediaStreamTrack.prototype.applyConstraints = function (c) {
        if (this.kind === 'audio' && typeof c === 'object') {
          c = JSON.parse(JSON.stringify(c));
          remap(c, 'autoGainControl', 'mozAutoGainControl');
          remap(c, 'noiseSuppression', 'mozNoiseSuppression');
        }

        return nativeApplyConstraints.apply(this, [c]);
      };
    }
  }
}

/***/ }),

/***/ "sJPo":
/*!**************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/edge_shim.js ***!
  \**************************************************************/
/*! exports provided: shimGetUserMedia, shimGetDisplayMedia, shimPeerConnection, shimReplaceTrack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimPeerConnection", function() { return shimPeerConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimReplaceTrack", function() { return shimReplaceTrack; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "lVut");
/* harmony import */ var _filtericeservers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filtericeservers */ "ZTa3");
/* harmony import */ var rtcpeerconnection_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rtcpeerconnection-shim */ "8D0k");
/* harmony import */ var rtcpeerconnection_shim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rtcpeerconnection_shim__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _getusermedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getusermedia */ "XmTq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return _getusermedia__WEBPACK_IMPORTED_MODULE_3__["shimGetUserMedia"]; });

/* harmony import */ var _getdisplaymedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getdisplaymedia */ "cGlD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shimGetDisplayMedia", function() { return _getdisplaymedia__WEBPACK_IMPORTED_MODULE_4__["shimGetDisplayMedia"]; });

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */







function shimPeerConnection(window) {
  var browserDetails = _utils__WEBPACK_IMPORTED_MODULE_0__["detectBrowser"](window);

  if (window.RTCIceGatherer) {
    if (!window.RTCIceCandidate) {
      window.RTCIceCandidate = function RTCIceCandidate(args) {
        return args;
      };
    }

    if (!window.RTCSessionDescription) {
      window.RTCSessionDescription = function RTCSessionDescription(args) {
        return args;
      };
    } // this adds an additional event listener to MediaStrackTrack that signals
    // when a tracks enabled property was changed. Workaround for a bug in
    // addStream, see below. No longer required in 15025+


    if (browserDetails.version < 15025) {
      var origMSTEnabled = Object.getOwnPropertyDescriptor(window.MediaStreamTrack.prototype, 'enabled');
      Object.defineProperty(window.MediaStreamTrack.prototype, 'enabled', {
        set: function set(value) {
          origMSTEnabled.set.call(this, value);
          var ev = new Event('enabled');
          ev.enabled = value;
          this.dispatchEvent(ev);
        }
      });
    }
  } // ORTC defines the DTMF sender a bit different.
  // https://github.com/w3c/ortc/issues/714


  if (window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
      get: function get() {
        if (this._dtmf === undefined) {
          if (this.track.kind === 'audio') {
            this._dtmf = new window.RTCDtmfSender(this);
          } else if (this.track.kind === 'video') {
            this._dtmf = null;
          }
        }

        return this._dtmf;
      }
    });
  } // Edge currently only implements the RTCDtmfSender, not the
  // RTCDTMFSender alias. See http://draft.ortc.org/#rtcdtmfsender2*


  if (window.RTCDtmfSender && !window.RTCDTMFSender) {
    window.RTCDTMFSender = window.RTCDtmfSender;
  }

  var RTCPeerConnectionShim = rtcpeerconnection_shim__WEBPACK_IMPORTED_MODULE_2___default()(window, browserDetails.version);

  window.RTCPeerConnection = function RTCPeerConnection(config) {
    if (config && config.iceServers) {
      config.iceServers = Object(_filtericeservers__WEBPACK_IMPORTED_MODULE_1__["filterIceServers"])(config.iceServers, browserDetails.version);
      _utils__WEBPACK_IMPORTED_MODULE_0__["log"]('ICE servers after filtering:', config.iceServers);
    }

    return new RTCPeerConnectionShim(config);
  };

  window.RTCPeerConnection.prototype = RTCPeerConnectionShim.prototype;
}
function shimReplaceTrack(window) {
  // ORTC has replaceTrack -- https://github.com/w3c/ortc/issues/614
  if (window.RTCRtpSender && !('replaceTrack' in window.RTCRtpSender.prototype)) {
    window.RTCRtpSender.prototype.replaceTrack = window.RTCRtpSender.prototype.setTrack;
  }
}

/***/ }),

/***/ "vwHn":
/*!*******************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/chrome/getusermedia.js ***!
  \*******************************************************************/
/*! exports provided: shimGetUserMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return shimGetUserMedia; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "lVut");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */



var logging = _utils_js__WEBPACK_IMPORTED_MODULE_0__["log"];
function shimGetUserMedia(window) {
  var navigator = window && window.navigator;

  if (!navigator.mediaDevices) {
    return;
  }

  var browserDetails = _utils_js__WEBPACK_IMPORTED_MODULE_0__["detectBrowser"](window);

  var constraintsToChrome_ = function constraintsToChrome_(c) {
    if (typeof c !== 'object' || c.mandatory || c.optional) {
      return c;
    }

    var cc = {};
    Object.keys(c).forEach(function (key) {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }

      var r = typeof c[key] === 'object' ? c[key] : {
        ideal: c[key]
      };

      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }

      var oldname_ = function oldname_(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }

        return name === 'deviceId' ? 'sourceId' : name;
      };

      if (r.ideal !== undefined) {
        cc.optional = cc.optional || [];
        var oc = {};

        if (typeof r.ideal === 'number') {
          oc[oldname_('min', key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname_('max', key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname_('', key)] = r.ideal;
          cc.optional.push(oc);
        }
      }

      if (r.exact !== undefined && typeof r.exact !== 'number') {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname_('', key)] = r.exact;
      } else {
        ['min', 'max'].forEach(function (mix) {
          if (r[mix] !== undefined) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname_(mix, key)] = r[mix];
          }
        });
      }
    });

    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }

    return cc;
  };

  var shimConstraints_ = function shimConstraints_(constraints, func) {
    if (browserDetails.version >= 61) {
      return func(constraints);
    }

    constraints = JSON.parse(JSON.stringify(constraints));

    if (constraints && typeof constraints.audio === 'object') {
      var remap = function remap(obj, a, b) {
        if (a in obj && !(b in obj)) {
          obj[b] = obj[a];
          delete obj[a];
        }
      };

      constraints = JSON.parse(JSON.stringify(constraints));
      remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
      remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
      constraints.audio = constraintsToChrome_(constraints.audio);
    }

    if (constraints && typeof constraints.video === 'object') {
      // Shim facingMode for mobile & surface pro.
      var face = constraints.video.facingMode;
      face = face && (typeof face === 'object' ? face : {
        ideal: face
      });
      var getSupportedFacingModeLies = browserDetails.version < 66;

      if (face && (face.exact === 'user' || face.exact === 'environment' || face.ideal === 'user' || face.ideal === 'environment') && !(navigator.mediaDevices.getSupportedConstraints && navigator.mediaDevices.getSupportedConstraints().facingMode && !getSupportedFacingModeLies)) {
        delete constraints.video.facingMode;
        var matches;

        if (face.exact === 'environment' || face.ideal === 'environment') {
          matches = ['back', 'rear'];
        } else if (face.exact === 'user' || face.ideal === 'user') {
          matches = ['front'];
        }

        if (matches) {
          // Look for matches in label, or use last cam for back (typical).
          return navigator.mediaDevices.enumerateDevices().then(function (devices) {
            devices = devices.filter(function (d) {
              return d.kind === 'videoinput';
            });
            var dev = devices.find(function (d) {
              return matches.some(function (match) {
                return d.label.toLowerCase().includes(match);
              });
            });

            if (!dev && devices.length && matches.includes('back')) {
              dev = devices[devices.length - 1]; // more likely the back cam
            }

            if (dev) {
              constraints.video.deviceId = face.exact ? {
                exact: dev.deviceId
              } : {
                ideal: dev.deviceId
              };
            }

            constraints.video = constraintsToChrome_(constraints.video);
            logging('chrome: ' + JSON.stringify(constraints));
            return func(constraints);
          });
        }
      }

      constraints.video = constraintsToChrome_(constraints.video);
    }

    logging('chrome: ' + JSON.stringify(constraints));
    return func(constraints);
  };

  var shimError_ = function shimError_(e) {
    if (browserDetails.version >= 64) {
      return e;
    }

    return {
      name: {
        PermissionDeniedError: 'NotAllowedError',
        PermissionDismissedError: 'NotAllowedError',
        InvalidStateError: 'NotAllowedError',
        DevicesNotFoundError: 'NotFoundError',
        ConstraintNotSatisfiedError: 'OverconstrainedError',
        TrackStartError: 'NotReadableError',
        MediaDeviceFailedDueToShutdown: 'NotAllowedError',
        MediaDeviceKillSwitchOn: 'NotAllowedError',
        TabCaptureError: 'AbortError',
        ScreenCaptureError: 'AbortError',
        DeviceCaptureError: 'AbortError'
      }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint || e.constraintName,
      toString: function toString() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  var getUserMedia_ = function getUserMedia_(constraints, onSuccess, onError) {
    shimConstraints_(constraints, function (c) {
      navigator.webkitGetUserMedia(c, onSuccess, function (e) {
        if (onError) {
          onError(shimError_(e));
        }
      });
    });
  };

  navigator.getUserMedia = getUserMedia_.bind(navigator); // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
  // function which returns a Promise, it does not accept spec-style
  // constraints.

  if (navigator.mediaDevices.getUserMedia) {
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);

    navigator.mediaDevices.getUserMedia = function (cs) {
      return shimConstraints_(cs, function (c) {
        return origGetUserMedia(c).then(function (stream) {
          if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
            stream.getTracks().forEach(function (track) {
              track.stop();
            });
            throw new DOMException('', 'NotFoundError');
          }

          return stream;
        }, function (e) {
          return Promise.reject(shimError_(e));
        });
      });
    };
  }
}

/***/ }),

/***/ "y4d3":
/*!***********************************************************!*\
  !*** ./src/app/pages/camera/product/product.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(); };
    ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 2, vars: 0, template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "product works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return ProductComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product',
                templateUrl: './product.component.html',
                styleUrls: ['./product.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=camera-camera-module.js.map