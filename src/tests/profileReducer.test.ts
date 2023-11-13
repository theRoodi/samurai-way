import {addPost, deletePost, profileReducer} from '../state/profileReducer';
import {v1} from 'uuid';
import {PostType} from '../state/state';

const state = {
    posts: [
        {id: v1(), message: 'Hello', likes: 5},
        {id: v1(), message: 'How are you', likes: 7},
        {id: v1(), message: 'Hello world', likes: 23}
    ] as Array<PostType>,
    profile: null,
    status: ''
}
test("length posts plus one", () => {
    const action = addPost('hey there')

    const newState = profileReducer(state,action)

    expect(newState.posts.length).toBe(4)
    expect(newState.posts[0].message).toBe('hey there')
})

test('length should be lower', () => {
    const postId = state.posts[0].id
    const action = deletePost(postId)
    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2)
})