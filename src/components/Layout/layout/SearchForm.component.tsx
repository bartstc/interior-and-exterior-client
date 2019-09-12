import React, { SyntheticEvent, useState, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Form, SearchInput, SubmitBtn } from './SearchForm.styles';

import { fetchProductsByQuery } from '../../../modules/shop/shop.actions';

interface IProps extends RouteComponentProps {
  toggled: boolean;
  toggleSearchForm: () => void;
  fetchProductsByQuery: typeof fetchProductsByQuery;
}

const _SearchForm: React.FC<IProps> = ({
  toggled,
  toggleSearchForm,
  fetchProductsByQuery,
  history,
  location: { pathname }
}) => {
  const [query, updateQuery] = useState<string>('');

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!query) return;

    updateQuery('');
    toggleSearchForm();

    if (pathname !== '/shop') history.push('/shop');
    fetchProductsByQuery(query);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    updateQuery(e.target.value);

  return (
    <Form toggled={toggled} onSubmit={onSubmit}>
      <SearchInput
        type="subit"
        placeholder="Search for products ..."
        onChange={onChange}
        value={query}
      />
      <SubmitBtn type="submit">
        <i className="far fa-arrow-alt-circle-right"></i>
      </SubmitBtn>
    </Form>
  );
};

export const SearchForm = withRouter(
  connect(
    null,
    { fetchProductsByQuery }
  )(_SearchForm)
);
