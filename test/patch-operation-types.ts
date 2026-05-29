import { expectTypeOf } from 'expect-type'
import type { PatchOperation } from '../src/types'

const addPatchOperation: PatchOperation = { op: 'add', path: 'summary', value: 'updated' }
const replacePatchOperation: PatchOperation = { op: 'replace', path: 'summary', value: 'updated' }
const removePatchOperation: PatchOperation = { op: 'remove', path: 'summary' }

expectTypeOf(addPatchOperation.value).toEqualTypeOf<unknown>()
expectTypeOf(replacePatchOperation.value).toEqualTypeOf<unknown>()
expectTypeOf(removePatchOperation.value).toEqualTypeOf<unknown | undefined>()

// @ts-expect-error add operations should require a value.
const addPatchOperationWithoutValue: PatchOperation = { op: 'add', path: 'summary' }

// @ts-expect-error replace operations should require a value.
const replacePatchOperationWithoutValue: PatchOperation = { op: 'replace', path: 'summary' }

// @ts-expect-error patch operation op should be constrained to JSON patch operations.
const invalidPatchOperation: PatchOperation = { op: 'copy', path: 'summary', value: 'updated' }
