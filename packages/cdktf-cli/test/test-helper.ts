import chalkStripAnsi from 'strip-ansi'

export const stripAnsi = (str: string | undefined): string => {
  if (str === undefined) throw new Error("can't strip from undefined string");

  return chalkStripAnsi(str)
}