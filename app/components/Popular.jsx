import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { fetchPopularRepos } from '../utils/api';

import ReposGrid from './ReposGrid';
import Loading from './Loading';

function LanguagesNav({ selected, onUpdateLanguage }) {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className="flex-center">
      {languages.map((language) => (
        <li key={language}>
          <button
            type="button"
            className="btn-clear nav-link"
            style={language === selected ? { color: 'rgb(187, 46, 31)' } : null}
            onClick={() => onUpdateLanguage(language)}
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
}

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
};

export default class Popular extends Component {
  state = {
    selectedLanguage: 'All',
    repos: {},
    error: null,
  };

  componentDidMount() {
    const { selectedLanguage } = this.state;
    this.updateLanguage(selectedLanguage);
  }

  updateLanguage = async (selectedLanguage) => {
    this.setState({
      selectedLanguage,
      error: null,
    });

    const { repos } = this.state;
    if (!repos[selectedLanguage]) {
      try {
        const data = await fetchPopularRepos(selectedLanguage);
        this.setState(({ repos: currentRepos }) => ({
          repos: {
            ...currentRepos,
            [selectedLanguage]: data,
          },
        }));
      } catch (error) {
        console.warn('Error fetching repos: ', error);
        this.setState({ error: 'There was an error fetching the repositories.' });
      }
    }
  };

  isLoading() {
    const { selectedLanguage, repos, error } = this.state;
    return !repos[selectedLanguage] && error === null;
  }

  render() {
    const { selectedLanguage, repos, error } = this.state;
    return (
      <>
        <LanguagesNav selected={selectedLanguage} onUpdateLanguage={this.updateLanguage} />
        {this.isLoading() && <Loading text="Fetching Repos" />}
        {error && <p className="center-text error">{error}</p>}
        {repos[selectedLanguage] && <ReposGrid repos={repos[selectedLanguage]} />}
      </>
    );
  }
}
