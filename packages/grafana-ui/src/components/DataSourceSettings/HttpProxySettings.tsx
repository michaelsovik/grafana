import React from 'react';
import { HttpSettingsBaseProps } from './types';
import { Switch } from '../Switch/Switch';

export const HttpProxySettings: React.FC<HttpSettingsBaseProps> = ({ dataSourceConfig, onChange }) => {
  return (
    <>
      <div className="gf-form-inline">
        <Switch
          label="TLS Client Auth"
          labelClass="width-13"
          checked={dataSourceConfig.jsonData.tlsAuth}
          onChange={event => onChange({ ...dataSourceConfig.jsonData, tlsAuth: event!.currentTarget.checked })}
        />

        <Switch
          label="With CA Cert"
          labelClass="width-13"
          checked={dataSourceConfig.jsonData.tlsAuthWithCACert}
          onChange={event =>
            onChange({ ...dataSourceConfig.jsonData, tlsAuthWithCACert: event!.currentTarget.checked })
          }
          tooltip="Needed forverifing self-signed TLS Certs"
        />
      </div>
      <div className="gf-form-inline">
        <Switch
          label="Skip TLS Verify"
          labelClass="width-13"
          checked={dataSourceConfig.jsonData.tlsSkipVerify}
          onChange={event => onChange({ ...dataSourceConfig.jsonData, tlsSkipVerify: event!.currentTarget.checked })}
        />
      </div>
      <div className="gf-form-inline">
        <Switch
          label="Forward OAuth Identity"
          labelClass="width-13"
          checked={dataSourceConfig.jsonData.oauthPassThru}
          onChange={event => onChange({ ...dataSourceConfig.jsonData, oauthPassThru: event!.currentTarget.checked })}
          tooltip="Forward the user's upstream OAuth identity to the datasource (Their access token gets passed along)."
        />
      </div>
    </>
  );
};