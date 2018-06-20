/**
 *  Created by daiwenjuan on 2018/6/20 下午2:53.
 */
import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

export default createDevTools(
  <DockMonitor defaultPosition="right"
               defaultIsVisible={false}
               toggleVisibilityKey="ctrl-h"
               changePositionKey="ctrl-w">
    <LogMonitor/>
  </DockMonitor>
)
