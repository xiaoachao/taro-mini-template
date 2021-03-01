/**
 * test component
 */

import React, { Component } from 'react'
import { View } from '@tarojs/components'

import './testComponent.scss'

/**
 * 页面 props
 */
type PageProps = {

}

/**
 * 页面 state
 */
type PageState = {

}

interface TestComponent {
  props: PageProps;
  state: PageState;
}

class TestComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

	componentDidShow() {

	}

  render () {
    return (
      <View className='testComponent-testComponent-component'>
        <View>test component</View>
      </View>
    )
  }
}

export default TestComponent
