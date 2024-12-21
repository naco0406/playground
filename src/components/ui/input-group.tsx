import type { BoxProps, InputElementProps } from "@chakra-ui/react"
import { Group, InputElement } from "@chakra-ui/react"
import * as React from "react"

export interface InputGroupProps extends BoxProps {
  startElementProps?: InputElementProps
  endElementProps?: InputElementProps
  startElement?: React.ReactNode
  endElement?: React.ReactNode
  // children 타입을 더 구체적으로 지정
  children: React.ReactElement<InputElementProps>
  startOffset?: InputElementProps["paddingStart"]
  endOffset?: InputElementProps["paddingEnd"]
}

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  function InputGroup(props, ref) {
    const {
      startElement,
      startElementProps,
      endElement,
      endElementProps,
      children,
      startOffset = "6px",
      endOffset = "6px",
      ...rest
    } = props

    // children의 타입이 이미 React.ReactElement<InputElementProps>로 지정되어 있으므로
    // 타입 assertion이 필요 없음
    const child = React.Children.only(children)

    return (
      <Group ref={ref} {...rest}>
        {startElement && (
          <InputElement pointerEvents="none" {...startElementProps}>
            {startElement}
          </InputElement>
        )}
        {React.cloneElement(child, {
          ...(startElement && {
            ps: `calc(var(--input-height) - ${startOffset})`,
          }),
          ...(endElement && { pe: `calc(var(--input-height) - ${endOffset})` }),
          ...children.props,
        })}
        {endElement && (
          <InputElement placement="end" {...endElementProps}>
            {endElement}
          </InputElement>
        )}
      </Group>
    )
  },
)

InputGroup.displayName = "InputGroup"